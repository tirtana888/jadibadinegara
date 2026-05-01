import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Flag, ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Home } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import AIAssistant from '../components/AIAssistant';

interface Question {
  id: string;
  question_number: number;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  option_e: string | null;
  correct_answer: string;
  explanation: string | null;
}

interface Tryout {
  id: string;
  title: string;
  description: string;
  category: string;
  duration_minutes: number;
  total_questions: number;
}

const TryoutPage: React.FC = () => {
  const { tryoutId } = useParams<{ tryoutId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [tryout, setTryout] = useState<Tryout | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  useEffect(() => {
    if (tryoutId && user) {
      loadTryout();
    }
  }, [tryoutId, user]);

  useEffect(() => {
    if (timeRemaining > 0 && !showResult) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !showResult && attemptId) {
      submitTryout();
    }
  }, [timeRemaining, showResult]);

  const loadTryout = async () => {
    try {
      const { data: tryoutData, error: tryoutError } = await supabase
        .from('tryouts')
        .select('*')
        .eq('id', tryoutId)
        .single();

      if (tryoutError) throw tryoutError;

      setTryout(tryoutData);
      setTimeRemaining(tryoutData.duration_minutes * 60);

      const { data: questionsData, error: questionsError } = await supabase
        .from('questions')
        .select('*')
        .eq('tryout_id', tryoutId)
        .order('question_number');

      if (questionsError) throw questionsError;

      setQuestions(questionsData);

      const { data: attemptData, error: attemptError } = await supabase
        .from('user_tryout_attempts')
        .insert([
          {
            user_id: user?.id,
            tryout_id: tryoutId,
          },
        ])
        .select()
        .single();

      if (attemptError) throw attemptError;

      setAttemptId(attemptData.id);
      setLoading(false);
    } catch (error) {
      console.error('Error loading tryout:', error);
      alert('Gagal memuat tryout. Silakan coba lagi.');
      navigate('/dashboard');
    }
  };

  const handleAnswerSelect = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));

    saveAnswer(answer);
  };

  const saveAnswer = async (answer: string) => {
    if (!attemptId || !questions[currentQuestion]) return;

    const question = questions[currentQuestion];
    const isCorrect = answer === question.correct_answer;

    try {
      const { error } = await supabase.from('user_answers').upsert(
        {
          attempt_id: attemptId,
          question_id: question.id,
          selected_answer: answer,
          is_correct: isCorrect,
          is_flagged: flaggedQuestions.has(currentQuestion),
        },
        { onConflict: 'attempt_id,question_id' }
      );

      if (error) throw error;
    } catch (error) {
      console.error('Error saving answer:', error);
    }
  };

  const toggleFlag = () => {
    setFlaggedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion)) {
        newSet.delete(currentQuestion);
      } else {
        newSet.add(currentQuestion);
      }
      return newSet;
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
  };

  const submitTryout = async () => {
    if (!attemptId) return;

    try {
      let correctAnswers = 0;
      let wrongAnswers = 0;
      let unanswered = 0;

      questions.forEach((question, index) => {
        const userAnswer = answers[index];
        if (!userAnswer) {
          unanswered++;
        } else if (userAnswer === question.correct_answer) {
          correctAnswers++;
        } else {
          wrongAnswers++;
        }
      });

      const score = Math.round((correctAnswers / questions.length) * 100);

      const { error } = await supabase
        .from('user_tryout_attempts')
        .update({
          completed_at: new Date().toISOString(),
          is_completed: true,
          score,
          correct_answers: correctAnswers,
          wrong_answers: wrongAnswers,
          unanswered,
          time_spent_seconds: (tryout!.duration_minutes * 60) - timeRemaining,
        })
        .eq('id', attemptId);

      if (error) throw error;

      setShowResult(true);
      setShowSubmitConfirm(false);
    } catch (error) {
      console.error('Error submitting tryout:', error);
      alert('Gagal menyimpan hasil tryout. Silakan coba lagi.');
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct_answer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Memuat tryout...</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    const score = calculateScore();
    const correctCount = questions.filter((q, i) => answers[i] === q.correct_answer).length;

    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Tryout Selesai!</h2>
              <p className="text-xl text-slate-600">{tryout?.title}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">{score}</div>
                  <div className="text-slate-600">Skor</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">{correctCount}</div>
                  <div className="text-slate-600">Benar</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-red-600 mb-2">
                    {questions.length - correctCount}
                  </div>
                  <div className="text-slate-600">Salah</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Pembahasan:</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {questions.map((question, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correct_answer;

                  return (
                    <div key={question.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 mb-2">
                            {index + 1}. {question.question_text}
                          </div>
                          <div className="text-sm space-y-1">
                            <div className="flex items-center">
                              <span className="text-slate-600">Jawaban Anda:</span>
                              <span
                                className={`ml-2 font-semibold ${
                                  isCorrect ? 'text-green-600' : 'text-red-600'
                                }`}
                              >
                                {userAnswer || 'Tidak dijawab'}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-slate-600">Jawaban Benar:</span>
                              <span className="ml-2 font-semibold text-green-600">
                                {question.correct_answer}
                              </span>
                            </div>
                          </div>
                          {question.explanation && (
                            <div className="mt-2 text-sm text-slate-600 bg-blue-50 p-2 rounded">
                              <strong>Penjelasan:</strong> {question.explanation}
                            </div>
                          )}
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-semibold ml-4 ${
                            isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {isCorrect ? 'Benar' : 'Salah'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Kembali ke Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{tryout?.title}</h1>
              <p className="text-slate-600 text-sm">
                Soal {currentQuestion + 1} dari {questions.length}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  timeRemaining < 300 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                }`}
              >
                <Clock className="h-5 w-5" />
                <span className="font-mono font-bold">{formatTime(timeRemaining)}</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-600 mt-2">
              {answeredCount} dari {questions.length} soal terjawab
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Soal {currentQuestion + 1}
                </h2>
                <button
                  onClick={toggleFlag}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-lg transition-colors ${
                    flaggedQuestions.has(currentQuestion)
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                  }`}
                >
                  <Flag className="h-4 w-4" />
                  <span className="text-sm">Tandai</span>
                </button>
              </div>

              <p className="text-slate-800 text-lg mb-6">{currentQ.question_text}</p>

              <div className="space-y-3">
                {['A', 'B', 'C', 'D', 'E'].map((option) => {
                  const optionKey = `option_${option.toLowerCase()}` as keyof Question;
                  const optionText = currentQ[optionKey] as string | null;

                  if (!optionText) return null;

                  const isSelected = answers[currentQuestion] === option;

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 text-slate-700'
                          }`}
                        >
                          {option}
                        </div>
                        <span className="text-slate-700 flex-1">{optionText}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center mt-6 pt-6 border-t">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 text-slate-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Sebelumnya</span>
                </button>

                {currentQuestion === questions.length - 1 ? (
                  <button
                    onClick={() => setShowSubmitConfirm(true)}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Selesai & Kirim
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <span>Selanjutnya</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Navigasi Soal</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, index) => {
                  const isAnswered = answers[index] !== undefined;
                  const isFlagged = flaggedQuestions.has(index);
                  const isCurrent = index === currentQuestion;

                  return (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`relative w-full aspect-square rounded-lg font-semibold transition-all ${
                        isCurrent
                          ? 'bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-2'
                          : isAnswered
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                      }`}
                    >
                      {index + 1}
                      {isFlagged && (
                        <Flag className="absolute top-0 right-0 h-3 w-3 text-amber-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-100 rounded"></div>
                  <span className="text-slate-600">Terjawab</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-100 rounded"></div>
                  <span className="text-slate-600">Belum dijawab</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-slate-600">Soal aktif</span>
                </div>
              </div>
            </div>

            <AIAssistant questionContext={currentQ.question_text} />
          </div>
        </div>
      </div>

      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Konfirmasi Submit</h3>
              <p className="text-slate-600">
                Anda telah menjawab {answeredCount} dari {questions.length} soal.
              </p>
              {answeredCount < questions.length && (
                <p className="text-red-600 font-semibold mt-2">
                  Masih ada {questions.length - answeredCount} soal yang belum dijawab!
                </p>
              )}
            </div>

            <div className="space-y-3">
              <button
                onClick={submitTryout}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Ya, Submit Sekarang
              </button>
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="w-full bg-gray-200 text-slate-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Kembali Mengerjakan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TryoutPage;

import React, { useState, useEffect } from 'react';
import { Clock, Flag, SkipForward, CheckCircle, ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react';
import AIAssistant from './AIAssistant';
import RegistrationModal from './RegistrationModal';

interface TryoutDemoProps {
  onCTAClick: (action: string) => void;
}

const TryoutDemo: React.FC<TryoutDemoProps> = ({ onCTAClick }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [timeRemaining, setTimeRemaining] = useState(1500); // 25 minutes
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResult, setShowResult] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Pancasila sebagai dasar negara Indonesia terdiri dari berapa sila?",
      options: [
        "4 sila",
        "5 sila",
        "6 sila",
        "7 sila"
      ],
      correct: "5 sila"
    },
    {
      id: 2,
      question: "Siapakah proklamator kemerdekaan Indonesia?",
      options: [
        "Soekarno dan Mohammad Hatta",
        "Soekarno dan Soeharto", 
        "Mohammad Hatta dan Sjahrir",
        "Soekarno dan Sjahrir"
      ],
      correct: "Soekarno dan Mohammad Hatta"
    },
    {
      id: 3,
      question: "UUD 1945 pertama kali disahkan pada tanggal?",
      options: [
        "17 Agustus 1945",
        "18 Agustus 1945",
        "19 Agustus 1945",
        "20 Agustus 1945"
      ],
      correct: "18 Agustus 1945"
    }
  ];

  useEffect(() => {
    if (timeRemaining > 0 && !showResult) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      setShowResult(true);
    }
  }, [timeRemaining, showResult]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] || '');

      if (currentQuestion + 1 === 2) {
        setShowRegistration(true);
      }
    }
  };

  const handleRegistrationSuccess = () => {
    setShowRegistration(false);
    window.location.href = '/dashboard';
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || '');
    }
  };

  const submitTryout = () => {
    setShowResult(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  if (showResult) {
    const score = calculateScore();
    return (
      <section className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center">
            <div className="mb-8">
              <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Tryout Selesai!</h2>
              <p className="text-xl text-slate-600">Berikut hasil tryout demo kamu:</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{score}</div>
                  <div className="text-slate-600">Skor Akhir</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">{Object.keys(answers).length}</div>
                  <div className="text-slate-600">Soal Dijawab</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">#{Math.floor(Math.random() * 100) + 1}</div>
                  <div className="text-slate-600">Ranking</div>
                </div>
              </div>
            </div>

            <div className="text-left mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Analisis Jawaban:</h3>
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-slate-900 font-medium">Soal {index + 1}</div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        answers[index] === question.correct
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {answers[index] === question.correct ? 'Benar' : 'Salah'}
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 mb-2">{question.question}</div>
                    <div className="text-sm">
                      <div className="text-slate-700">Jawaban kamu: <span className={answers[index] === question.correct ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>{answers[index] || 'Tidak dijawab'}</span></div>
                      <div className="text-green-600">Jawaban benar: <span className="font-semibold">{question.correct}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onCTAClick('daftar-tryout')}
                className="bg-secondary-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary-600 transition-colors duration-200"
              >
                DAFTAR TRYOUT LENGKAP
              </button>
              <button 
                onClick={() => window.location.reload()}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
                COBA LAGI
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Demo Tryout SKD</h1>
              <p className="text-sm sm:text-base text-slate-600">Tes Wawasan Kebangsaan • 3 dari 100 soal</p>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center text-red-600 font-bold text-base sm:text-lg">
                <Clock className="h-5 w-5 mr-2" />
                {formatTime(timeRemaining)}
              </div>
              <button className="bg-amber-400 text-slate-900 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 text-sm sm:text-base">
                <Flag className="h-4 w-4 inline mr-2" />
                Tandai
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-7 gap-6">
          {/* Question Navigation Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-8">
              <h3 className="font-bold text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">Navigasi Soal</h3>
              <div className="grid grid-cols-6 sm:grid-cols-5 lg:grid-cols-3 gap-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setSelectedAnswer(answers[index] || '');
                    }}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                      index === currentQuestion
                        ? 'bg-primary-600 text-white'
                        : answers[index]
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <div className="mt-4 sm:mt-6 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-100 rounded mr-2"></div>
                  <span className="text-slate-600">Sudah dijawab</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded mr-2"></div>
                  <span className="text-slate-600">Sedang dikerjakan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-100 rounded mr-2"></div>
                  <span className="text-slate-600">Belum dijawab</span>
                </div>
              </div>

              <button
                onClick={submitTryout}
                className="w-full mt-4 sm:mt-6 bg-red-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 text-sm sm:text-base"
              >
                <AlertTriangle className="h-4 w-4 inline mr-2" />
                SELESAI TRYOUT
              </button>
            </div>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              {/* Progress Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between text-xs sm:text-sm text-slate-600 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div 
                    className="bg-primary-600 h-1.5 sm:h-2 rounded-full transition-all duration-300"
                    style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-6 sm:mb-8">
                <div className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                  Soal {currentQuestion + 1} dari {questions.length}
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 leading-relaxed">
                  {questions[currentQuestion].question}
                </h2>

                {/* Answer Options */}
                <div className="space-y-3 sm:space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                        selectedAnswer === option
                          ? 'border-primary-500 bg-primary-50 text-primary-900'
                          : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center mr-3 sm:mr-4 font-semibold text-xs sm:text-sm ${
                          selectedAnswer === option
                            ? 'border-primary-500 bg-primary-500 text-white'
                            : 'border-gray-400 text-gray-600'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="font-medium text-sm sm:text-base">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className={`flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base ${
                    currentQuestion === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                  Sebelumnya
                </button>

                <div className="flex space-x-2 sm:space-x-3">
                  <button className="border-2 border-secondary-400 text-secondary-600 px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors duration-200 text-sm sm:text-base">
                    <SkipForward className="h-4 w-4 inline mr-1 sm:mr-2" />
                    Lewati
                  </button>
                  
                  <button
                    onClick={nextQuestion}
                    disabled={currentQuestion === questions.length - 1}
                    className={`flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base ${
                      currentQuestion === questions.length - 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    Selanjutnya
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Assistant Sidebar */}
          <div className="lg:col-span-2 order-3">
            <AIAssistant questionContext={questions[currentQuestion].question} />
          </div>
        </div>
      </div>

      <RegistrationModal
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
        onSuccess={handleRegistrationSuccess}
      />
    </section>
  );
};

export default TryoutDemo;
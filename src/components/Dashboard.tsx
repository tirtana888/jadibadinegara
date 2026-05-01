import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { BookOpen, Trophy, Clock, TrendingUp, LogOut, User as UserIcon, Play, CheckCircle } from 'lucide-react';
import AIAssistant from './AIAssistant';

interface Tryout {
  id: string;
  title: string;
  description: string;
  category: string;
  duration_minutes: number;
  total_questions: number;
  is_free: boolean;
}

interface Attempt {
  id: string;
  score: number;
  correct_answers: number;
  total_questions: number;
  completed_at: string;
  tryout_title: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [tryouts, setTryouts] = useState<Tryout[]>([]);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedTryout, setSelectedTryout] = useState<Tryout | null>(null);

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    try {
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .maybeSingle();

      setProfile(profileData);

      const { data: tryoutsData } = await supabase
        .from('tryouts')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      setTryouts(tryoutsData || []);

      const { data: attemptsData } = await supabase
        .from('user_tryout_attempts')
        .select(`
          id,
          score,
          correct_answers,
          completed_at,
          tryout_id,
          tryouts (
            title,
            total_questions
          )
        `)
        .eq('user_id', user?.id)
        .eq('is_completed', true)
        .order('completed_at', { ascending: false })
        .limit(5);

      const formattedAttempts = attemptsData?.map((attempt: any) => ({
        id: attempt.id,
        score: attempt.score,
        correct_answers: attempt.correct_answers,
        total_questions: attempt.tryouts.total_questions,
        completed_at: attempt.completed_at,
        tryout_title: attempt.tryouts.title,
      })) || [];

      setAttempts(formattedAttempts);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const startTryout = (tryout: Tryout) => {
    setSelectedTryout(tryout);
    setShowCheckoutModal(true);
  };

  const handleCheckoutChoice = (type: 'online' | 'offline') => {
    if (!selectedTryout) return;

    const programType = selectedTryout.category === 'TWK' || selectedTryout.category === 'TIU' || selectedTryout.category === 'TKP' || selectedTryout.category === 'FULL'
      ? 'cpns'
      : selectedTryout.category.toLowerCase().includes('stan')
        ? 'stan'
        : 'kedinasan';

    navigate('/', { state: { checkout: type, program: programType } });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Memuat dashboard...</p>
        </div>
      </div>
    );
  }

  const totalAttempts = attempts.length;
  const averageScore = attempts.length > 0
    ? Math.round(attempts.reduce((sum, att) => sum + att.score, 0) / attempts.length)
    : 0;
  const bestScore = attempts.length > 0
    ? Math.max(...attempts.map(att => att.score))
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-bold">
                DNA BISNIS
              </div>
              <span className="text-slate-600 hidden sm:inline">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-700">
                <UserIcon className="h-5 w-5" />
                <span className="font-medium hidden sm:inline">{profile?.full_name || 'User'}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Selamat Datang, {profile?.full_name || 'User'}!
          </h1>
          <p className="text-slate-600">Kelola dan pantau progress tryout Anda di sini</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{totalAttempts}</div>
            <div className="text-sm text-slate-600">Total Tryout</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{bestScore}</div>
            <div className="text-sm text-slate-600">Skor Terbaik</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{averageScore}</div>
            <div className="text-sm text-slate-600">Rata-rata Skor</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{tryouts.length}</div>
            <div className="text-sm text-slate-600">Tryout Tersedia</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Tryout Tersedia</h2>

              {tryouts.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Belum ada tryout tersedia</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {tryouts.map((tryout) => (
                    <div
                      key={tryout.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 mb-1">{tryout.title}</h3>
                          <p className="text-sm text-slate-600 mb-3">{tryout.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {tryout.duration_minutes} menit
                            </span>
                            <span className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {tryout.total_questions} soal
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              tryout.is_free
                                ? 'bg-green-100 text-green-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {tryout.is_free ? 'Gratis' : 'Premium'}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => startTryout(tryout)}
                          className="ml-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
                        >
                          <Play className="h-4 w-4" />
                          <span>Mulai</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <AIAssistant questionContext="Dashboard - Bantuan umum untuk persiapan tryout CPNS, STAN, dan Kedinasan" />
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Riwayat Tryout</h2>

              {attempts.length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500 text-sm">Belum ada riwayat tryout</p>
                  <p className="text-slate-400 text-xs mt-2">Mulai tryout pertama Anda!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {attempts.map((attempt) => (
                    <div
                      key={attempt.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 text-sm mb-1">
                            {attempt.tryout_title}
                          </h4>
                          <p className="text-xs text-slate-500">
                            {new Date(attempt.completed_at).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{attempt.score}</div>
                          <div className="text-xs text-slate-500">
                            {attempt.correct_answers}/{attempt.total_questions}
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full"
                          style={{ width: `${(attempt.correct_answers / attempt.total_questions) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showCheckoutModal && selectedTryout && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-2 text-center">Pilih Program Bimbingan</h3>
            <p className="text-slate-600 text-center mb-8">
              Daftar program bimbingan untuk {selectedTryout.title}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <button
                onClick={() => handleCheckoutChoice('online')}
                className="group relative bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-2 border-blue-200 hover:border-blue-400 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POPULER
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Program Online</h4>
                  <p className="text-slate-600 text-sm mb-4">Belajar fleksibel kapan saja, dimana saja</p>
                  <ul className="text-left text-sm text-slate-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Video pembelajaran lengkap
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Tryout unlimited
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Konsultasi mentor online
                    </li>
                  </ul>
                </div>
                <div className="mt-6 bg-blue-600 text-white py-3 rounded-lg font-bold text-center group-hover:bg-blue-700 transition-colors">
                  Lihat Paket Online
                </div>
              </button>

              <button
                onClick={() => handleCheckoutChoice('offline')}
                className="group relative bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 border-2 border-green-200 hover:border-green-400 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute top-4 right-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PREMIUM
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <UserIcon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Program Offline</h4>
                  <p className="text-slate-600 text-sm mb-4">Bimbingan tatap muka dengan mentor</p>
                  <ul className="text-left text-sm text-slate-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Kelas tatap muka
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Mentor berpengalaman
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Fasilitas kelas lengkap
                    </li>
                  </ul>
                </div>
                <div className="mt-6 bg-green-600 text-white py-3 rounded-lg font-bold text-center group-hover:bg-green-700 transition-colors">
                  Lihat Paket Offline
                </div>
              </button>
            </div>

            <button
              onClick={() => setShowCheckoutModal(false)}
              className="w-full bg-gray-200 text-slate-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

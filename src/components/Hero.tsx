import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, CheckCircle, Users, Trophy, BookOpen, Sparkles, Cpu, Brain } from 'lucide-react';

interface HeroProps {
  onCTAClick: (action: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  const [currentStat, setCurrentStat] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({ users: 0, success: 0, alumni: 0 });
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(statInterval);
  }, []);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const targets = { users: 50000, success: 95, alumni: 1000 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        users: Math.floor(targets.users * progress),
        success: Math.floor(targets.success * progress),
        alumni: Math.floor(targets.alumni * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(cardInterval);
  }, []);

  return (
    <section className="relative bg-white text-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      {/* AI Neural Network Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3">
                <animate attributeName="stop-opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3">
                <animate attributeName="stop-opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
              </stop>
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="90%" y2="30%" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.5" />
          <line x1="20%" y1="50%" x2="80%" y2="60%" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.5" />
          <line x1="15%" y1="70%" x2="85%" y2="40%" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.5" />
          <circle cx="10%" cy="20%" r="3" fill="#3B82F6" opacity="0.4" className="animate-ai-pulse" />
          <circle cx="90%" cy="30%" r="3" fill="#10B981" opacity="0.4" className="animate-ai-pulse" />
          <circle cx="20%" cy="50%" r="3" fill="#3B82F6" opacity="0.4" className="animate-ai-pulse" />
          <circle cx="80%" cy="60%" r="3" fill="#10B981" opacity="0.4" className="animate-ai-pulse" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-20 h-20 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* AI Floating Icons */}
      <div className="absolute top-32 right-20 animate-float opacity-20">
        <Brain className="h-12 w-12 text-blue-500" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Cpu className="h-10 w-10 text-green-500" />
      </div>
      <div className="absolute top-1/2 right-32 animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="h-8 w-8 text-blue-400" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <div className="flex items-center space-x-2 text-secondary-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Platform Terpercaya #1</span>
                </div>
                <div className="relative flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white text-xs font-bold uppercase tracking-wide shadow-lg animate-ai-glow">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <span>AI Powered</span>
                  <div className="absolute inset-0 rounded-full animate-shimmer"></div>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-slate-900">
                Wujudkan Impian
                <span className="block text-primary-600">Jadi ASN</span>
                <span className="block">Melalui 2 Jalur Terbaik</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed">
                Bimbel kedinasan dan cpns pertama di Indonesia dengan sistem{' '}
                <span className="relative inline-flex items-center">
                  <span className="font-semibold text-blue-600">deep learning</span>
                  <Brain className="inline h-5 w-5 ml-1 text-blue-500 animate-pulse" />
                </span>
                {' '}dan support{' '}
                <span className="relative inline-flex items-center">
                  <span className="font-semibold text-green-600">AI Learning</span>
                  <Cpu className="inline h-5 w-5 ml-1 text-green-500 animate-pulse" />
                </span>
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className={`text-center transform transition-all duration-500 ${currentStat === 0 ? 'scale-110' : 'scale-100'}`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-600">
                  {animatedStats.users >= 1000 ? `${Math.floor(animatedStats.users / 1000)}K+` : `${animatedStats.users}+`}
                </div>
                <div className="text-xs sm:text-sm text-slate-500">Peserta Aktif</div>
              </div>
              <div className={`text-center transform transition-all duration-500 ${currentStat === 1 ? 'scale-110' : 'scale-100'}`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-600">{animatedStats.success}%</div>
                <div className="text-xs sm:text-sm text-slate-500">Tingkat Kelulusan</div>
              </div>
              <div className={`text-center transform transition-all duration-500 ${currentStat === 2 ? 'scale-110' : 'scale-100'}`}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-600">{animatedStats.alumni}+</div>
                <div className="text-xs sm:text-sm text-slate-500">Alumni ASN</div>
              </div>
            </div>

            {/* CTA Buttons with Pulse Animation */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onCTAClick('daftar-tryout')}
                className="group relative bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-secondary-600 hover:to-secondary-700 transform hover:scale-105 transition-all duration-200 shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative">DAFTAR TRYOUT SEKARANG</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => onCTAClick('coba-gratis')}
                className="group relative border-2 border-primary-600 text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-primary-600 hover:text-white transition-all duration-200 flex items-center justify-center overflow-hidden"
              >
                <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="relative">COBA TRYOUT GRATIS</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                Gratis Trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                Sertifikat Resmi
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                24/7 Support
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Feature Cards */}
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <div
              className={`bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer transform ${activeCard === 0 ? 'scale-105 shadow-xl ring-2 ring-secondary-500' : 'hover:scale-105'}`}
              onClick={() => onCTAClick('stan')}
            >
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-br from-secondary-500 to-secondary-600 p-2 sm:p-3 rounded-xl transition-transform duration-300 ${activeCard === 0 ? 'animate-pulse' : ''}`}>
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">STAN & Kedinasan</h3>
                  <p className="text-sm sm:text-base text-slate-600">Persiapan sekolah kedinasan terlengkap</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-secondary-600 font-semibold text-sm">
                <span>Lihat Program</span>
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${activeCard === 0 ? 'translate-x-2' : ''}`} />
              </div>
            </div>

            <div
              className={`bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer transform ${activeCard === 1 ? 'scale-105 shadow-xl ring-2 ring-secondary-500' : 'hover:scale-105'}`}
              onClick={() => onCTAClick('cpns')}
            >
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-br from-secondary-500 to-secondary-600 p-2 sm:p-3 rounded-xl transition-transform duration-300 ${activeCard === 1 ? 'animate-pulse' : ''}`}>
                  <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">CPNS & PPPK</h3>
                  <p className="text-sm sm:text-base text-slate-600">Program ASN dengan ranking nasional</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-secondary-600 font-semibold text-sm">
                <span>Lihat Program</span>
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${activeCard === 1 ? 'translate-x-2' : ''}`} />
              </div>
            </div>

            <div
              className={`bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer transform ${activeCard === 2 ? 'scale-105 shadow-xl ring-2 ring-secondary-500' : 'hover:scale-105'}`}
              onClick={() => onCTAClick('testimonials')}
            >
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-br from-secondary-500 to-secondary-600 p-2 sm:p-3 rounded-xl transition-transform duration-300 ${activeCard === 2 ? 'animate-pulse' : ''}`}>
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Grup Belajar</h3>
                  <p className="text-sm sm:text-base text-slate-600">Komunitas pejuang ASN aktif</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-secondary-600 font-semibold text-sm">
                <span>Lihat Testimoni</span>
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${activeCard === 2 ? 'translate-x-2' : ''}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
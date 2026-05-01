import React, { useState } from 'react';
import { Check, CreditCard, Shield, Clock, Award, Users, ArrowLeft, Sparkles, Brain, Cpu } from 'lucide-react';

interface CheckoutOnlineProps {
  programType: 'stan' | 'kedinasan' | 'cpns';
  onBack: () => void;
  onCTAClick: (action: string) => void;
}

const CheckoutOnline: React.FC<CheckoutOnlineProps> = ({ programType, onBack, onCTAClick }) => {
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'premium' | 'vip'>('premium');

  const programData = {
    stan: {
      title: 'Program Online STAN & Kedinasan',
      subtitle: 'Persiapan Lengkap PKN STAN',
      color: 'primary',
      gradientFrom: 'from-primary-600',
      gradientTo: 'to-primary-800',
      textColor: 'text-primary-600',
      bgColor: 'bg-primary-600',
      packages: {
        basic: {
          name: 'Basic',
          price: 299000,
          duration: '3 Bulan',
          features: [
            'Akses 2000+ soal TPA, TBI, Matematika',
            'Video pembahasan materi dasar',
            '20 paket tryout online',
            'E-modul ringkasan materi',
            'Akses forum diskusi',
            'Sertifikat digital'
          ]
        },
        premium: {
          name: 'Premium',
          price: 499000,
          originalPrice: 799000,
          duration: '6 Bulan',
          popular: true,
          features: [
            'Akses 5000+ soal lengkap',
            'Video pembahasan detail alumni STAN',
            '50 paket tryout dengan sistem CAT',
            'E-modul lengkap + ringkasan',
            'Ranking nasional real-time',
            'Konsultasi mentor 2x/bulan',
            'Akses grup belajar eksklusif',
            'Sertifikat digital + cetak',
            'Garansi uang kembali*'
          ]
        },
        vip: {
          name: 'VIP All Access',
          price: 799000,
          originalPrice: 1299000,
          duration: '1 Tahun',
          features: [
            'Semua fitur Premium',
            'Akses UNLIMITED semua soal',
            'Bimbingan personal 1-on-1',
            'Video pembahasan eksklusif',
            'Tryout mingguan unlimited',
            'Prediksi soal terbaru',
            'Konsultasi mentor unlimited',
            'Private grup mentoring',
            'Kelas online live mingguan',
            'Analisis performa mendalam',
            'Garansi lolos atau uang kembali*'
          ]
        }
      }
    },
    kedinasan: {
      title: 'Program Online Sekolah Kedinasan',
      subtitle: 'STIS, STIN, IPDN, STMKG, STSN',
      color: 'secondary',
      gradientFrom: 'from-secondary-600',
      gradientTo: 'to-secondary-800',
      textColor: 'text-secondary-600',
      bgColor: 'bg-secondary-600',
      packages: {
        basic: {
          name: 'Basic',
          price: 349000,
          duration: '3 Bulan',
          features: [
            'Akses 3000+ soal semua kedinasan',
            'Video pembahasan materi dasar',
            '25 paket tryout online',
            'E-modul ringkasan materi',
            'Akses forum diskusi',
            'Sertifikat digital'
          ]
        },
        premium: {
          name: 'Premium',
          price: 549000,
          originalPrice: 899000,
          duration: '6 Bulan',
          popular: true,
          features: [
            'Akses 8000+ soal untuk semua sekolah',
            'Video pembahasan detail alumni kedinasan',
            'Tryout spesifik per sekolah',
            'E-modul lengkap semua sekolah',
            'Ranking nasional per sekolah',
            'Konsultasi mentor 2x/bulan',
            'Akses grup belajar eksklusif',
            'Sertifikat digital + cetak',
            'Garansi uang kembali*'
          ]
        },
        vip: {
          name: 'VIP All Access',
          price: 899000,
          originalPrice: 1499000,
          duration: '1 Tahun',
          features: [
            'Semua fitur Premium',
            'Akses UNLIMITED semua soal',
            'Bimbingan personal 1-on-1',
            'Video pembahasan eksklusif',
            'Tryout mingguan unlimited',
            'Prediksi soal semua sekolah',
            'Konsultasi mentor unlimited',
            'Private grup mentoring',
            'Kelas online live mingguan',
            'Analisis performa mendalam',
            'Garansi lolos atau uang kembali*'
          ]
        }
      }
    },
    cpns: {
      title: 'Program Online CPNS & PPPK',
      subtitle: 'SKD: TWK, TIU, TKP',
      color: 'green',
      gradientFrom: 'from-green-600',
      gradientTo: 'to-green-800',
      textColor: 'text-green-600',
      bgColor: 'bg-green-600',
      packages: {
        basic: {
          name: 'Basic',
          price: 249000,
          duration: '3 Bulan',
          features: [
            'Akses 3000+ soal TWK, TIU, TKP',
            'Video pembahasan materi dasar',
            '20 paket tryout CAT BKN',
            'E-modul ringkasan SKD',
            'Akses forum diskusi',
            'Sertifikat digital'
          ]
        },
        premium: {
          name: 'Premium',
          price: 449000,
          originalPrice: 749000,
          duration: '6 Bulan',
          popular: true,
          features: [
            'Akses 10.000+ soal SKD lengkap',
            'Video pembahasan PNS berpengalaman',
            'Simulasi CAT BKN real',
            'E-modul SKD lengkap',
            'Ranking nasional real-time',
            'Konsultasi mentor 2x/bulan',
            'Akses grup belajar eksklusif',
            'Sertifikat digital + cetak',
            'Garansi uang kembali*'
          ]
        },
        vip: {
          name: 'VIP All Access',
          price: 699000,
          originalPrice: 1199000,
          duration: '1 Tahun',
          features: [
            'Semua fitur Premium',
            'Akses UNLIMITED semua soal',
            'Bimbingan personal 1-on-1',
            'Video pembahasan eksklusif',
            'Tryout mingguan unlimited',
            'Prediksi soal CPNS terbaru',
            'Konsultasi mentor unlimited',
            'Private grup mentoring',
            'Kelas online live mingguan',
            'Analisis performa mendalam',
            'Garansi lolos atau uang kembali*'
          ]
        }
      }
    }
  };

  const data = programData[programType];
  const pkg = data.packages[selectedPackage];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className={`bg-gradient-to-br ${data.gradientFrom} ${data.gradientTo} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-gray-200 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Kembali
          </button>
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold uppercase tracking-wide shadow-lg mb-4">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>AI Powered Learning</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-3">{data.title}</h1>
            <p className="text-lg lg:text-xl text-white/90">{data.subtitle}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Pilih Paket Program</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {(['basic', 'premium', 'vip'] as const).map((type) => {
                  const p = data.packages[type];
                  return (
                    <button
                      key={type}
                      onClick={() => setSelectedPackage(type)}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedPackage === type
                          ? `border-${data.color}-600 bg-${data.color}-50 shadow-lg scale-105`
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      {p.popular && (
                        <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${data.bgColor} text-white px-4 py-1 rounded-full text-xs font-bold`}>
                          TERPOPULER
                        </div>
                      )}
                      <div className={`text-lg font-bold mb-2 ${selectedPackage === type ? data.textColor : 'text-slate-900'}`}>
                        {p.name}
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-1">
                        {formatPrice(p.price)}
                      </div>
                      {p.originalPrice && (
                        <div className="text-sm text-slate-500 line-through mb-2">
                          {formatPrice(p.originalPrice)}
                        </div>
                      )}
                      <div className="text-sm text-slate-600">{p.duration}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fitur Yang Didapatkan</h3>
              <div className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className={`h-5 w-5 ${data.textColor} mr-3 flex-shrink-0 mt-0.5`} />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl border-2 border-blue-200 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-xl mr-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Teknologi AI Learning</h3>
                  <p className="text-sm text-slate-600">Sistem pembelajaran adaptif dengan kecerdasan buatan</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Cpu className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Deep Learning Analysis</div>
                    <div className="text-xs text-slate-600">Analisis pola jawaban dan rekomendasi materi</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Personalized Learning Path</div>
                    <div className="text-xs text-slate-600">Jalur belajar yang disesuaikan dengan kemampuan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ringkasan Pembayaran</h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-slate-600">Paket</span>
                  <span className="font-semibold text-slate-900">{pkg.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Durasi</span>
                  <span className="font-semibold text-slate-900">{pkg.duration}</span>
                </div>
                {pkg.originalPrice && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Harga Normal</span>
                      <span className="text-slate-500 line-through">{formatPrice(pkg.originalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span className="font-semibold">Diskon</span>
                      <span className="font-bold">
                        {formatPrice(pkg.originalPrice - pkg.price)}
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-slate-900">Total Pembayaran</span>
                <span className={`text-2xl font-bold ${data.textColor}`}>
                  {formatPrice(pkg.price)}
                </span>
              </div>

              <a
                href="https://www.xendit.co/id/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full ${data.bgColor} text-white py-4 px-6 rounded-xl font-bold text-lg hover:opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg mb-4 text-center`}
              >
                DAFTAR SEKARANG
              </a>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-2" />
                  <span>Pembayaran 100% aman</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Akses langsung setelah pembayaran</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Sertifikat resmi tersedia</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-500 mr-2" />
                  <span>Grup belajar eksklusif</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start">
                <CreditCard className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <div className="font-semibold text-slate-900 mb-1">Metode Pembayaran</div>
                  Transfer Bank, E-Wallet, QRIS, Kartu Kredit/Debit
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="text-xs text-slate-600">
                <div className="font-semibold text-slate-900 mb-1">*Syarat & Ketentuan Garansi:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Mengikuti minimal 80% tryout</li>
                  <li>Menyelesaikan semua materi pembelajaran</li>
                  <li>Aktif konsultasi dengan mentor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOnline;

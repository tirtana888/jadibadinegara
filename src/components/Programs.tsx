import React from 'react';
import { ArrowRight, Clock, Users, BookOpen, Award, Zap, CheckCircle, MapPin } from 'lucide-react';

interface ProgramsProps {
  onCTAClick: (action: string) => void;
  onProgramClick: (page: string) => void;
}

const Programs: React.FC<ProgramsProps> = ({ onCTAClick, onProgramClick }) => {
  const programs = [
    {
      id: 'stan',
      title: 'STAN',
      subtitle: 'Program persiapan PKN STAN',
      price: 'Rp 299.000',
      originalPrice: 'Rp 599.000',
      features: [
        'Tryout STAN (TPA, TBI, Matematika)',
        'Bank Soal 5000+ Terbaru',
        'Pembahasan Video Lengkap',
        'Simulasi Ujian STAN',
        'Tips & Trik Cepat',
        'Ranking Nasional Real-time',
        'Grup Telegram Eksklusif',
        'Program Offline Tersedia'
      ],
      icon: <BookOpen className="h-8 w-8" />,
      popular: false,
      cta: 'PILIH STAN',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      page: 'stan'
    },
    {
      id: 'kedinasan',
      title: 'Kedinasan',
      subtitle: 'Program persiapan sekolah kedinasan',
      price: 'Rp 299.000',
      originalPrice: 'Rp 599.000',
      features: [
        'Tryout STIS, STIN, STMKG',
        'Tryout IPDN, STSN, STPN',
        'Bank Soal 8000+ Lengkap',
        'Pembahasan Video Lengkap',
        'Simulasi Tes Psikotes',
        'Tips & Trik Wawancara',
        'Ranking Nasional Real-time',
        'Program Offline Tersedia'
      ],
      icon: <Award className="h-8 w-8" />,
      popular: false,
      cta: 'PILIH KEDINASAN',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
      page: 'kedinasan'
    },
    {
      id: 'cpns-pppk',
      title: 'CPNS & PPPK',
      subtitle: 'Program persiapan ASN terlengkap',
      price: 'Rp 199.000',
      originalPrice: 'Rp 399.000',
      features: [
        'Tryout SKD (TWK, TIU, TKP)',
        'Tryout PPPK Guru, Kesehatan, Teknis',
        'Bank Soal 15.000+ Soal Terbaru',
        'Pembahasan Video Lengkap',
        'Analisis Hasil Mendalam',
        'Live Class dengan Mentor ASN',
        'Konsultasi Personal',
        'Ranking Nasional Real-time',
        'Grup Alumni ASN Aktif'
      ],
      icon: <Zap className="h-8 w-8" />,
      popular: true,
      cta: 'PILIH CPNS & PPPK',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      borderColor: 'border-green-300',
      page: 'cpns'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Program Bimbingan Unggulan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Pilih program persiapan yang sesuai dengan cita-cita kariermu menjadi ASN.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`relative ${program.bgColor} ${program.borderColor} border-2 rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                program.popular ? 'ring-4 ring-secondary-200' : ''
              }`}
            >
              {program.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    PALING POPULER
                  </span>
                </div>
              )}

              <div className="text-center mb-4 sm:mb-6">
                <div className={`inline-flex p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 ${
                  program.popular ? 'bg-secondary-500 text-white' : 'bg-primary-600 text-white'
                }`}>
                  {program.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{program.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">{program.subtitle}</p>
                
                <div className="mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">{program.price}</div>
                  {program.originalPrice && (
                    <div className="text-base sm:text-lg text-slate-500 line-through">{program.originalPrice}</div>
                  )}
                  {program.price !== 'GRATIS' && (
                    <div className="text-xs sm:text-sm text-slate-600">/selamanya</div>
                  )}
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-slate-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 ${
                program.id === 'stan'
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                  : program.id === 'kedinasan'
                  ? 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg'
                  : 'bg-green-600 text-white hover:bg-green-700 shadow-lg'
              }`}
              onClick={() => onProgramClick(program.page)}
              >
                {program.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Offline Program Locations */}
        <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl p-10 lg:p-12 shadow-2xl mb-12 border-2 border-secondary-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-secondary-100 text-secondary-700 px-6 py-3 rounded-full font-bold text-lg mb-6">
              <Users className="h-6 w-6 mr-2" />
              Program Offline
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Butuh Bimbingan Lebih Intensif?</h3>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Program bimbingan offline tersedia untuk STAN, Kedinasan, CPNS & PPPK dengan mentor berpengalaman
            </p>

            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-md mb-8">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-secondary-600 mr-2" />
                <h4 className="text-2xl font-bold text-slate-900">Lokasi Bimbingan Offline Tersedia</h4>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-700">
                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-5 border-2 border-secondary-200">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h5 className="font-bold text-lg text-slate-900 mb-2">Surabaya</h5>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Jl. Sejahtera No. A15/16<br />
                        Perum PJMI, Surabaya<br />
                        Jawa Timur 60132
                      </p>
                      <p className="text-sm font-semibold text-secondary-600">
                        (031) 8271-5432
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-5 border-2 border-secondary-200">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h5 className="font-bold text-lg text-slate-900 mb-2">Jakarta</h5>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Jl. Thamrin No. 45<br />
                        Jakarta Pusat<br />
                        DKI Jakarta 10350
                      </p>
                      <p className="text-sm font-semibold text-secondary-600">
                        (021) 3156-7890
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-5 border-2 border-secondary-200">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h5 className="font-bold text-lg text-slate-900 mb-2">Bandung</h5>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Jl. Dago No. 88<br />
                        Coblong, Bandung<br />
                        Jawa Barat 40135
                      </p>
                      <p className="text-sm font-semibold text-secondary-600">
                        (022) 2011-4567
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-5 border-2 border-secondary-200">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h5 className="font-bold text-lg text-slate-900 mb-2">Yogyakarta</h5>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Jl. Gejayan No. 52<br />
                        Sleman, Yogyakarta<br />
                        DI Yogyakarta 55281
                      </p>
                      <p className="text-sm font-semibold text-secondary-600">
                        (0274) 5678-901
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-5 border-2 border-secondary-200">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h5 className="font-bold text-lg text-slate-900 mb-2">Malang</h5>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Jl. Veteran No. 25<br />
                        Klojen, Malang<br />
                        Jawa Timur 65111
                      </p>
                      <p className="text-sm font-semibold text-secondary-600">
                        (0341) 3456-789
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-secondary-600 mb-2">5</div>
                <div className="text-slate-600 font-semibold">Kota Tersedia</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-secondary-600 mb-2">500+</div>
                <div className="text-slate-600 font-semibold">Alumni Lolos</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-secondary-600 mb-2">24/7</div>
                <div className="text-slate-600 font-semibold">Support Mentor</div>
              </div>
            </div>
            <button
              onClick={() => onCTAClick('offline')}
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-secondary-600 hover:to-secondary-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              LIHAT PROGRAM OFFLINE
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Fleksibel & Lengkap</h3>
              <p className="text-sm sm:text-base text-slate-600">Belajar kapan saja, dimana saja dengan materi terlengkap</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Mentor Berpengalaman</h3>
              <p className="text-sm sm:text-base text-slate-600">Dibimbing langsung oleh alumni STAN dan ASN aktif</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Terbukti Efektif</h3>
              <p className="text-sm sm:text-base text-slate-600">Ribuan alumni berhasil lolos STAN dan menjadi ASN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
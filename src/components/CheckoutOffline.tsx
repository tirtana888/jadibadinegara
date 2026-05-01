import React, { useState } from 'react';
import { Check, MapPin, Users, Calendar, Award, Shield, ArrowLeft, Sparkles, Clock, BookOpen } from 'lucide-react';

interface CheckoutOfflineProps {
  programType: 'stan' | 'kedinasan' | 'cpns';
  onBack: () => void;
  onCTAClick: (action: string) => void;
}

const CheckoutOffline: React.FC<CheckoutOfflineProps> = ({ programType, onBack, onCTAClick }) => {
  const [selectedPackage, setSelectedPackage] = useState<'intensif' | 'supercamp' | 'privat'>('supercamp');
  const [selectedLocation, setSelectedLocation] = useState<string>('jakarta');

  const programData = {
    stan: {
      title: 'Program Offline STAN & Kedinasan',
      subtitle: 'Bimbingan Intensif Tatap Muka',
      color: 'primary',
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-blue-800',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-600',
      packages: {
        intensif: {
          name: 'Kelas Intensif',
          price: 2499000,
          duration: '2 Bulan',
          sessions: '24 Pertemuan',
          classSize: 'Max 20 siswa',
          features: [
            'Pertemuan 3x seminggu (2 jam)',
            'Materi TPA, TBI, Matematika lengkap',
            'Modul cetak eksklusif',
            '10 tryout sistem CAT',
            'Konsultasi dengan mentor',
            'Akses platform online',
            'Grup belajar WhatsApp',
            'Sertifikat kelulusan'
          ]
        },
        supercamp: {
          name: 'Super Camp',
          price: 4999000,
          originalPrice: 6999000,
          duration: '3 Bulan',
          sessions: '48 Pertemuan',
          classSize: 'Max 15 siswa',
          popular: true,
          features: [
            'Pertemuan 4x seminggu (2.5 jam)',
            'Materi lengkap + drill soal intensif',
            'Modul premium + buku latihan',
            '20 tryout sistem CAT',
            'Konsultasi mentor unlimited',
            'Akses platform online premium',
            'Kelas tambahan weekend',
            'Simulasi wawancara',
            'Grup eksklusif + mentoring',
            'Sertifikat + garansi*'
          ]
        },
        privat: {
          name: 'Private Class',
          price: 8999000,
          originalPrice: 11999000,
          duration: '3 Bulan',
          sessions: 'Flexible',
          classSize: '1-on-1',
          features: [
            'Jadwal fleksibel sesuai kebutuhan',
            'Program disesuaikan kemampuan',
            'Mentor berpengalaman dedicated',
            'Materi customized',
            'Modul eksklusif personal',
            'Tryout unlimited',
            'Konsultasi 24/7',
            'Simulasi wawancara intensif',
            'Analisis mendalam per sesi',
            'Garansi lolos atau uang kembali*'
          ]
        }
      }
    },
    kedinasan: {
      title: 'Program Offline Sekolah Kedinasan',
      subtitle: 'STIS, STIN, IPDN, STMKG, STSN',
      color: 'secondary',
      gradientFrom: 'from-green-600',
      gradientTo: 'to-green-800',
      textColor: 'text-green-600',
      bgColor: 'bg-green-600',
      packages: {
        intensif: {
          name: 'Kelas Intensif',
          price: 2799000,
          duration: '2 Bulan',
          sessions: '24 Pertemuan',
          classSize: 'Max 20 siswa',
          features: [
            'Pertemuan 3x seminggu (2 jam)',
            'Materi semua sekolah kedinasan',
            'Modul cetak eksklusif',
            '12 tryout sistem CAT',
            'Konsultasi dengan mentor',
            'Akses platform online',
            'Grup belajar WhatsApp',
            'Sertifikat kelulusan'
          ]
        },
        supercamp: {
          name: 'Super Camp',
          price: 5499000,
          originalPrice: 7499000,
          duration: '3 Bulan',
          sessions: '48 Pertemuan',
          classSize: 'Max 15 siswa',
          popular: true,
          features: [
            'Pertemuan 4x seminggu (2.5 jam)',
            'Materi lengkap semua sekolah',
            'Modul premium + buku latihan',
            '25 tryout sistem CAT',
            'Konsultasi mentor unlimited',
            'Akses platform online premium',
            'Kelas tambahan weekend',
            'Tes kesehatan & psikotes',
            'Grup eksklusif + mentoring',
            'Sertifikat + garansi*'
          ]
        },
        privat: {
          name: 'Private Class',
          price: 9499000,
          originalPrice: 12999000,
          duration: '3 Bulan',
          sessions: 'Flexible',
          classSize: '1-on-1',
          features: [
            'Jadwal fleksibel sesuai kebutuhan',
            'Program disesuaikan kemampuan',
            'Mentor alumni kedinasan',
            'Materi customized',
            'Modul eksklusif personal',
            'Tryout unlimited',
            'Konsultasi 24/7',
            'Persiapan tes kesehatan',
            'Analisis mendalam per sesi',
            'Garansi lolos atau uang kembali*'
          ]
        }
      }
    },
    cpns: {
      title: 'Program Offline CPNS & PPPK',
      subtitle: 'SKD: TWK, TIU, TKP',
      color: 'green',
      gradientFrom: 'from-emerald-600',
      gradientTo: 'to-emerald-800',
      textColor: 'text-emerald-600',
      bgColor: 'bg-emerald-600',
      packages: {
        intensif: {
          name: 'Kelas Intensif',
          price: 1999000,
          duration: '2 Bulan',
          sessions: '24 Pertemuan',
          classSize: 'Max 25 siswa',
          features: [
            'Pertemuan 3x seminggu (2 jam)',
            'Materi TWK, TIU, TKP lengkap',
            'Modul cetak eksklusif',
            '15 tryout sistem CAT BKN',
            'Konsultasi dengan mentor',
            'Akses platform online',
            'Grup belajar WhatsApp',
            'Sertifikat kelulusan'
          ]
        },
        supercamp: {
          name: 'Super Camp',
          price: 3999000,
          originalPrice: 5499000,
          duration: '3 Bulan',
          sessions: '48 Pertemuan',
          classSize: 'Max 20 siswa',
          popular: true,
          features: [
            'Pertemuan 4x seminggu (2.5 jam)',
            'Materi lengkap + drill soal',
            'Modul premium + buku latihan',
            '25 tryout CAT BKN',
            'Konsultasi mentor unlimited',
            'Akses platform online premium',
            'Kelas tambahan weekend',
            'Simulasi wawancara SKB',
            'Grup eksklusif + mentoring',
            'Sertifikat + garansi*'
          ]
        },
        privat: {
          name: 'Private Class',
          price: 6999000,
          originalPrice: 9999000,
          duration: '3 Bulan',
          sessions: 'Flexible',
          classSize: '1-on-1',
          features: [
            'Jadwal fleksibel sesuai kebutuhan',
            'Program disesuaikan kemampuan',
            'Mentor PNS berpengalaman',
            'Materi customized',
            'Modul eksklusif personal',
            'Tryout unlimited',
            'Konsultasi 24/7',
            'Simulasi SKB intensif',
            'Analisis mendalam per sesi',
            'Garansi lolos atau uang kembali*'
          ]
        }
      }
    }
  };

  const locations = [
    { id: 'jakarta', name: 'Jakarta Pusat', address: 'Jl. Sudirman No. 123' },
    { id: 'bandung', name: 'Bandung', address: 'Jl. Dago No. 45' },
    { id: 'surabaya', name: 'Surabaya', address: 'Jl. Pemuda No. 78' },
    { id: 'yogyakarta', name: 'Yogyakarta', address: 'Jl. Malioboro No. 56' },
    { id: 'semarang', name: 'Semarang', address: 'Jl. Pemuda No. 90' }
  ];

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
              <Users className="h-4 w-4" />
              <span>Bimbingan Tatap Muka</span>
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
                {(['intensif', 'supercamp', 'privat'] as const).map((type) => {
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
                      <div className="text-sm text-slate-600 space-y-1">
                        <div>{p.duration}</div>
                        <div>{p.sessions}</div>
                        <div className="font-semibold">{p.classSize}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Pilih Lokasi Bimbingan</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedLocation === loc.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start">
                      <MapPin className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 ${selectedLocation === loc.id ? 'text-blue-600' : 'text-slate-400'}`} />
                      <div>
                        <div className="font-semibold text-slate-900">{loc.name}</div>
                        <div className="text-sm text-slate-600">{loc.address}</div>
                      </div>
                    </div>
                  </button>
                ))}
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
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Fasilitas Premium</h3>
                  <p className="text-sm text-slate-600">Kelas nyaman dengan teknologi modern</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Ruang Kelas AC</div>
                    <div className="text-xs text-slate-600">Nyaman dengan kapasitas terbatas</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Free WiFi & Snack</div>
                    <div className="text-xs text-slate-600">Fasilitas lengkap untuk belajar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ringkasan Pendaftaran</h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-slate-600">Paket</span>
                  <span className="font-semibold text-slate-900">{pkg.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Durasi</span>
                  <span className="font-semibold text-slate-900">{pkg.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Pertemuan</span>
                  <span className="font-semibold text-slate-900">{pkg.sessions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Lokasi</span>
                  <span className="font-semibold text-slate-900">
                    {locations.find(l => l.id === selectedLocation)?.name}
                  </span>
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
                  <span>Pembayaran aman & terpercaya</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Jadwal fleksibel dapat diatur</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-500 mr-2" />
                  <span>Kelas kecil, perhatian maksimal</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Sertifikat resmi tersedia</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="text-xs text-slate-600">
                <div className="font-semibold text-slate-900 mb-1">*Syarat & Ketentuan Garansi:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Kehadiran minimal 90%</li>
                  <li>Mengerjakan semua tugas</li>
                  <li>Mengikuti semua tryout</li>
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

export default CheckoutOffline;

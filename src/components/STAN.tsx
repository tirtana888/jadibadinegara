import React from 'react';
import { Trophy, BookOpen, Video, Target, CheckCircle, Clock, Users, Award, Star, Zap, MapPin, Calendar, Phone } from 'lucide-react';

interface STANProps {
  onCTAClick: (action: string) => void;
}

const STAN: React.FC<STANProps> = ({ onCTAClick }) => {
  const onlineFeatures = [
    {
      title: 'Bank Soal Lengkap',
      description: '5000+ soal TPA, TBI, dan Matematika terbaru',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'Video Pembahasan',
      description: 'Pembahasan detail dari alumni STAN',
      icon: <Video className="h-6 w-6" />
    },
    {
      title: 'Tryout Berkala',
      description: '50+ paket tryout dengan sistem CAT',
      icon: <Target className="h-6 w-6" />
    },
    {
      title: 'Ranking Nasional',
      description: 'Lihat posisi kamu dibanding peserta lain',
      icon: <Trophy className="h-6 w-6" />
    },
    {
      title: 'Akses 24/7',
      description: 'Belajar kapan saja, dimana saja',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'E-Modul Premium',
      description: 'Modul lengkap dan ringkasan materi',
      icon: <Award className="h-6 w-6" />
    }
  ];

  const offlinePackages = [
    {
      name: 'Intensif STAN - 4 Bulan',
      duration: '4 Bulan',
      sessions: '48 Pertemuan',
      price: 'Rp 2.000.000',
      originalPrice: 'Rp 3.500.000',
      features: [
        'Kelas tatap muka 4x/minggu',
        'Modul lengkap cetak + digital',
        'Tryout TPA, TBI, Matematika',
        'Simulasi tes psikotes offline',
        'Pembahasan langsung alumni STAN',
        'Mock interview & tips wawancara',
        'Konsultasi personal karier',
        'Grup WhatsApp eksklusif',
        'Sertifikat kelulusan'
      ]
    },
    {
      name: 'Super Intensif STAN - 2 Bulan',
      duration: '2 Bulan',
      sessions: '32 Pertemuan',
      price: 'Rp 1.500.000',
      originalPrice: 'Rp 2.500.000',
      features: [
        'Kelas super intensif 4x/minggu',
        'Drilling soal intensif',
        'Teknik cepat mengerjakan',
        'Prediksi soal terbaru',
        'Intensive coaching personal',
        'Daily practice test offline',
        'Simulasi kondisi ujian sebenarnya',
        'Emergency consultation'
      ]
    }
  ];

  const locations = [
    { city: 'Jakarta', address: 'Jl. Sudirman No. 123, Jakarta Pusat', phone: '021-1234-5678' },
    { city: 'Surabaya', address: 'Jl. Pemuda No. 45, Surabaya', phone: '031-1234-5678' },
    { city: 'Bandung', address: 'Jl. Asia Afrika No. 67, Bandung', phone: '022-1234-5678' },
    { city: 'Medan', address: 'Jl. Gatot Subroto No. 89, Medan', phone: '061-1234-5678' },
    { city: 'Yogyakarta', address: 'Jl. Malioboro No. 12, Yogyakarta', phone: '0274-123-456' },
    { city: 'Semarang', address: 'Jl. Pandanaran No. 34, Semarang', phone: '024-1234-5678' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-secondary-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6">
              <Trophy className="h-6 w-6 mr-2" />
              Program PKN STAN
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Raih Impianmu Masuk
              <span className="block text-secondary-400">PKN STAN</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Program persiapan lengkap dengan bimbingan alumni STAN. Tersedia kelas online dan offline di seluruh Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onCTAClick('daftar-tryout')}
                className="bg-secondary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-600 transform hover:scale-105 transition-all duration-200"
              >
                DAFTAR SEKARANG
              </button>
              <button
                onClick={() => onCTAClick('demo')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-800 transition-all duration-200"
              >
                COBA GRATIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Online Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-8 py-4 rounded-full font-bold text-xl mb-6 shadow-lg">
              <Zap className="h-7 w-7 mr-3" />
              Program Online
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Belajar Kapan Saja, Dimana Saja</h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto">
              Akses lengkap ke semua materi STAN dengan sistem pembelajaran online yang fleksibel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onlineFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="bg-primary-100 text-primary-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => onCTAClick('checkout-stan')}
              className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              DAFTAR PROGRAM ONLINE
            </button>
            <button
              onClick={() => onCTAClick('demo')}
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              COBA TRYOUT GRATIS
            </button>
          </div>
        </div>
      </section>

      {/* Offline Program Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-8 py-4 rounded-full font-bold text-xl mb-6 shadow-lg">
              <Users className="h-7 w-7 mr-3" />
              Program Offline
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Bimbingan Intensif Tatap Muka</h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto">
              Kelas offline dengan mentor alumni STAN berpengalaman di 15+ kota besar Indonesia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {offlinePackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="flex justify-center items-center space-x-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {pkg.sessions}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary-600">{pkg.price}</div>
                    <div className="text-lg text-slate-500 line-through">{pkg.originalPrice}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onCTAClick('checkout-stan-offline')}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-primary-700 transition-colors duration-200"
                >
                  DAFTAR PROGRAM INI
                </button>
              </div>
            ))}
          </div>

          {/* Locations */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Lokasi Kelas Tersedia</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                    <h4 className="text-lg font-bold text-slate-900">{location.city}</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{location.address}</p>
                  <div className="flex items-center text-sm text-slate-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {location.phone}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 mt-8 mb-4">
              Lokasi lainnya: Makassar, Palembang, Balikpapan, Manado, Denpasar, Malang, Solo, Pekanbaru, Banjarmasin
            </p>
            <button
              onClick={() => onCTAClick('whatsapp')}
              className="bg-secondary-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-secondary-600 transition-colors duration-200"
            >
              TANYA LOKASI TERDEKAT
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Raih Impianmu Masuk STAN?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Bergabunglah dengan ribuan alumni yang sudah berhasil lolos STAN bersama kami. Pilih program yang sesuai dengan kebutuhanmu!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onCTAClick('daftar-tryout')}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              DAFTAR SEKARANG
            </button>
            <button
              onClick={() => onCTAClick('whatsapp')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              KONSULTASI GRATIS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default STAN;

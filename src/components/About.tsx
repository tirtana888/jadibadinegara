import React from 'react';
import { Award, Target, Rocket, Users, Brain, Heart, TrendingUp, Shield, Sparkles, MapPin, Mail, Instagram, Phone } from 'lucide-react';

interface AboutProps {
  onCTAClick: (action: string) => void;
}

const About: React.FC<AboutProps> = ({ onCTAClick }) => {
  const features = [
    {
      title: 'Tutor Profesional & Berpengalaman',
      description: 'Alumni sekolah kedinasan, ASN aktif, dan praktisi pendidikan',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'AI Adaptive Learning System',
      description: 'Analisis performa siswa & rekomendasi belajar personal berbasis data',
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: 'Pendekatan Holistik',
      description: 'Fokus pada akademik, karakter, dan mental pengabdian',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Monitoring Real-Time',
      description: 'Orang tua dapat memantau perkembangan siswa melalui JAN Learning Dashboard',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'Jaringan Nasional',
      description: 'Kemitraan luas dengan sekolah dan komunitas di berbagai kota Indonesia',
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: 'Program Garansi Lulus',
      description: 'Jaminan kelulusan bagi siswa yang memenuhi komitmen belajar',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const programs = [
    {
      title: 'Program Karantina ASN',
      description: 'Full boarding, jadwal belajar terstruktur, pembinaan mental, dan simulasi ujian CAT.'
    },
    {
      title: 'Program Garansi Lulus',
      description: 'Jaminan kelulusan bagi siswa yang memenuhi komitmen belajar sesuai kontrak akademik.'
    },
    {
      title: 'Program Beasiswa ASN Muda',
      description: 'Beasiswa bagi siswa berprestasi atau kurang mampu yang memiliki potensi tinggi.'
    },
    {
      title: 'Tryout CAT Nasional',
      description: 'Simulasi resmi berbasis sistem CAT yang menyerupai seleksi sekolah kedinasan dan CPNS.'
    },
    {
      title: 'Program AI Learning System',
      description: 'Platform digital dengan AI adaptive learning untuk memantau progres belajar real-time.'
    }
  ];

  const coreValues = [
    {
      letter: 'P',
      title: 'Professional Excellence',
      description: 'Tutor terbaik, sistem terukur, hasil belajar berkualitas tinggi.',
      color: 'bg-blue-500'
    },
    {
      letter: 'R',
      title: 'Resilience & Discipline',
      description: 'Melatih mental tangguh & disiplin sebagai fondasi ASN sejati.',
      color: 'bg-green-500'
    },
    {
      letter: 'I',
      title: 'Innovation with AI',
      description: 'Teknologi AI untuk evaluasi presisi & pembelajaran adaptif.',
      color: 'bg-purple-500'
    },
    {
      letter: 'D',
      title: 'Dedication to Student Success',
      description: 'Fokus pada kemajuan & keberhasilan nyata siswa.',
      color: 'bg-orange-500'
    },
    {
      letter: 'E',
      title: 'Empathy & Integrity',
      description: 'Mengedepankan empati, kejujuran, dan transparansi.',
      color: 'bg-red-500'
    }
  ];

  const missions = [
    'Menyelenggarakan pendidikan berbasis karakter ASN dengan sistem pembelajaran profesional dan adaptif.',
    'Mengintegrasikan Artificial Intelligence dalam proses belajar untuk hasil yang terukur dan relevan.',
    'Memberikan pendampingan, evaluasi, dan mentoring berkelanjutan berorientasi keberhasilan siswa.',
    'Menjadi mitra strategis pemerintah dalam menyiapkan calon ASN dan siswa kedinasan unggul.'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-lg mb-6">
              <Award className="h-6 w-6 mr-2" />
              Tentang Kami
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Bimbel Jadi Abdi Negara
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-4 max-w-4xl mx-auto">
              Lembaga pendidikan nonformal yang berkomitmen menyiapkan generasi muda Indonesia menjadi aparatur negara yang profesional, berintegritas, dan berkarakter pengabdian.
            </p>
            <p className="text-lg italic text-secondary-200 max-w-3xl mx-auto">
              "Kami bukan sekadar bimbel — kami adalah partner strategis pemerintah dalam mencetak calon abdi negara masa depan yang unggul dan bangga mengabdi."
            </p>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary-600 p-4 rounded-xl mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Visi</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Menjadi lembaga pendidikan ASN terdepan yang melahirkan generasi pengabdi bangsa yang profesional, inovatif, disiplin, dan berintegritas tinggi.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-secondary-600 p-4 rounded-xl mr-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Misi</h2>
              </div>
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start text-slate-700">
                    <div className="bg-secondary-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-base leading-relaxed">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Sejarah Kami</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-5xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Didirikan oleh <span className="font-bold text-primary-600">Riandi Ahmad</span>, profesional pendidikan berpengalaman lebih dari 15 tahun di bidang pelatihan dan pengembangan SDM.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              JAN lahir dari keprihatinan terhadap rendahnya kesiapan calon siswa kedinasan menghadapi seleksi nasional. Kini, JAN telah menjadi lembaga bimbingan modern dengan <span className="font-bold text-secondary-600">AI Evaluation System</span> dan pendekatan digital learning adaptif yang membuat proses belajar lebih personal, terukur, dan efisien.
            </p>
            <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-600">
              <p className="text-base text-slate-700 italic">
                Sejak didirikan pada tahun 2020, JAN menjadi wadah belajar berbasis AI dan teknologi modern, membantu siswa dari seluruh Indonesia mengasah kemampuan akademik, mental, dan karakter agar siap menjadi calon ASN dan siswa sekolah kedinasan terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - PRIDE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
              <Sparkles className="h-6 w-6 mr-2" />
              CORE VALUE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">PRIDE</h2>
            <p className="text-xl text-slate-600">Nilai Utama yang Membangun Karakter Abdi Negara</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100">
                <div className={`${value.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-4 mx-auto`}>
                  {value.letter}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">{value.title}</h3>
                <p className="text-sm text-slate-600 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Program Unggulan</h2>
            <p className="text-xl text-slate-600">Program-program terbaik untuk mempersiapkan masa depanmu</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 rounded-lg p-3 mr-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
                    <p className="text-slate-600">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Keunggulan Kompetitif</h2>
            <p className="text-xl text-slate-600">Mengapa memilih Bimbel Jadi Abdi Negara?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Hubungi Kami</h2>
            <p className="text-xl text-primary-100">
              Siap memulai perjalananmu menjadi abdi negara?
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <a href="https://wa.me/6287833641467" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-white transition-colors">
                    +62 878-3364-1467
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Lokasi Kantor</h3>
                  <p className="text-primary-100">Jl. Sejahtera A15/16, Perum PJMI, Surabaya, Jawa Timur 60132</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Instagram className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Instagram</h3>
                  <a href="https://instagram.com/jadiabdinegara.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-white transition-colors">
                    @jadiabdinegara.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:info@jadiabdinegara.com" className="text-primary-100 hover:text-white transition-colors">
                    info@jadiabdinegara.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Website</h3>
                  <a href="https://www.jadiabdinegara.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-white transition-colors">
                    www.jadiabdinegara.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => onCTAClick('whatsapp')}
              className="bg-white text-primary-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              HUBUNGI KAMI SEKARANG
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

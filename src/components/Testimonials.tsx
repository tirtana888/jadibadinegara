import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Calendar } from 'lucide-react';

interface TestimonialsProps {
  onCTAClick: (action: string) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onCTAClick }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Putri Handayani',
      position: 'PNS Kementerian Kesehatan',
      location: 'Jakarta',
      year: '2023',
      score: '485',
      rank: '#12',
      photo: '/Untitled design (37) copy copy.png',
      testimonial: 'Platform Abdi Negara benar-benar membantu saya mempersiapkan CPNS dengan sistematis. Fitur ranking nasional memotivasi saya untuk terus belajar. Alhamdulillah lulus dan sekarang sudah jadi PNS di Kemenkes.',
      features: ['Online Premium', 'Live Class', 'Mentor Consultation']
    },
    {
      id: 2,
      name: 'Ahmad Fauzi Rahman',
      position: 'PPPK Guru SD',
      location: 'Bandung',
      year: '2023',
      score: '492',
      rank: '#8',
      photo: '/Untitled design (33).png',
      testimonial: 'Sebagai guru honorer, saya sempat pesimis bisa lulus PPPK. Tapi dengan bimbingan intensif di Abdi Negara, saya berhasil mencapai skor tinggi. Pembahasan soal-soalnya sangat detail dan mudah dipahami.',
      features: ['Offline Intensif', 'PPPK Specialist', 'Study Plan']
    },
    {
      id: 3,
      name: 'Dewi Kusuma Wardani',
      position: 'PNS Pemda DKI Jakarta',
      location: 'Jakarta',
      year: '2024',
      score: '478',
      rank: '#15',
      photo: '/Untitled design (35).png',
      testimonial: 'Yang paling saya suka adalah analisis hasil tryout yang detail. Saya bisa tahu kelemahan di mana dan bagaimana cara memperbaikinya. Tim support juga very responsive dan helpful banget.',
      features: ['Smart Analytics', 'Progress Tracking', '24/7 Support']
    },
    {
      id: 4,
      name: 'Rizki Pratama',
      position: 'PNS BUMN Bank BRI',
      location: 'Surabaya',
      year: '2024',
      score: '495',
      rank: '#5',
      photo: '/Untitled design (32).png',
      testimonial: 'Persiapan tes BUMN membutuhkan strategi khusus. Jadi Abdi Negara memberikan bank soal yang sesuai dengan pola soal BUMN terbaru. Interface tryout-nya juga mirip dengan ujian asli, jadi tidak kaget saat ujian.',
      features: ['BUMN Specialist', 'Realistic Simulation', 'Latest Patterns']
    },
    {
      id: 5,
      name: 'Siti Nurhaliza',
      position: 'PNS Kementerian Pendidikan',
      location: 'Yogyakarta',
      year: '2023',
      score: '487',
      rank: '#10',
      photo: '/Untitled design (36).png',
      testimonial: 'Grup Telegram-nya sangat aktif dan supportive. Bisa diskusi dengan sesama peserta dan mentor. Motivasi dari teman-teman membuat saya semangat belajar terus. Terima kasih Jadi Abdi Negara!',
      features: ['Active Community', 'Peer Support', 'Motivation System']
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Testimoni Alumni Sukses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Bergabung dengan ribuan alumni yang telah berhasil lolos seleksi CPNS, PPPK, dan BUMN
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Photo & Stats */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-12 text-white">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <img
                    src={currentData.photo}
                    alt={currentData.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-secondary-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                    <Star className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{currentData.name}</h3>
                <p className="text-primary-100 text-lg mb-2">{currentData.position}</p>
                <div className="flex items-center justify-center text-primary-200 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">{currentData.location}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{currentData.year}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-secondary-400 mb-1">{currentData.score}</div>
                  <div className="text-primary-100 text-sm">Skor Akhir</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-secondary-400 mb-1">{currentData.rank}</div>
                  <div className="text-primary-100 text-sm">Ranking</div>
                </div>
              </div>

              {/* Features Used */}
              <div className="mt-8">
                <p className="text-primary-200 text-sm mb-3">Fitur yang digunakan:</p>
                <div className="flex flex-wrap gap-2">
                  {currentData.features.map((feature, idx) => (
                    <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="p-12">
              <div className="mb-8">
                <Quote className="h-16 w-16 text-secondary-400 mb-6" />
                <p className="text-xl leading-relaxed text-slate-700 font-medium">
                  "{currentData.testimonial}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-8">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current text-secondary-400" />
                  ))}
                </div>
                <span className="text-slate-600 font-semibold">Rating: 5.0/5.0</span>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">
                  {currentTestimonial + 1} dari {testimonials.length} testimoni
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-200"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-primary-600 hover:bg-primary-700 p-3 rounded-full transition-colors duration-200"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-200 ${
                index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Success Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
              <div className="text-slate-600">Total Alumni</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">95%</div>
              <div className="text-slate-600">Tingkat Kelulusan</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-slate-600">Rating Kepuasan</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neutral-600 mb-2">100+</div>
              <div className="text-slate-600">Instansi Partner</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => onCTAClick('daftar-tryout')}
            className="bg-secondary-500 text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-secondary-600 transform hover:scale-105 transition-all duration-200 shadow-2xl"
          >
            BERGABUNG DENGAN ALUMNI SUKSES
          </button>
          <p className="text-slate-600 mt-4">Jadilah bagian dari success story berikutnya</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
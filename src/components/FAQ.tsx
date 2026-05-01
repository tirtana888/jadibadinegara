import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQProps {
  onCTAClick: (action: string) => void;
}

const FAQ: React.FC<FAQProps> = ({ onCTAClick }) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apa perbedaan antara paket Starter, Professional, dan Ultimate?',
      answer: 'Perbedaan utama terletak pada jumlah tryout, fitur analisis, dan dukungan mentoring. Starter Pack cocok untuk pemula dengan 20 tryout dan fitur dasar. Professional memberikan 50+ tryout, video pembahasan, dan ranking nasional. Ultimate Pro adalah paket terlengkap dengan bimbel live class, konsultasi 1-on-1, dan garansi uang kembali.'
    },
    {
      question: 'Apakah soal-soal tryout sesuai dengan kisi-kisi terbaru?',
      answer: 'Ya, semua soal kami disusun berdasarkan kisi-kisi terbaru dari BKN dan disesuaikan dengan pola soal CPNS/PPPK/BUMN terkini. Tim content kami terdiri dari para ahli dan praktisi yang rutin mengupdate bank soal setiap bulan.'
    },
    {
      question: 'Bagaimana cara mengakses tryout setelah pembayaran?',
      answer: 'Setelah pembayaran berhasil, kamu akan menerima email konfirmasi dengan detail akun. Login ke dashboard, pilih paket tryout yang ingin dikerjakan, dan mulai ujian. Hasil akan langsung muncul setelah selesai mengerjakan.'
    },
    {
      question: 'Apakah ada garansi uang kembali jika tidak lulus?',
      answer: 'Untuk paket Ultimate Pro, kami memberikan garansi uang kembali 50% jika tidak lulus setelah mengikuti program lengkap (minimal 80% tryout selesai, mengikuti live class, dan konsultasi mentor). Syarat dan ketentuan berlaku.'
    },
    {
      question: 'Berapa lama akses paket yang sudah dibeli?',
      answer: 'Starter Pack berlaku 6 bulan, Professional 1 tahun, dan Ultimate Pro akses selamanya. Semua update soal dan fitur baru akan otomatis tersedia selama masa aktif paket.'
    },
    {
      question: 'Apakah bisa mengerjakan tryout dari smartphone?',
      answer: 'Tentu! Platform kami 100% mobile-friendly. Kamu bisa mengerjakan tryout, melihat hasil, dan mengakses semua fitur dari smartphone Android/iOS, tablet, atau laptop dengan koneksi internet.'
    },
    {
      question: 'Bagaimana sistem ranking nasional bekerja?',
      answer: 'Ranking dihitung real-time berdasarkan skor tryout terbaru dari seluruh peserta. Kamu bisa melihat posisi dibanding peserta lain se-Indonesia, ranking per wilayah, dan progress peringkat dari waktu ke waktu.'
    },
    {
      question: 'Apakah tersedia pembahasan untuk semua soal?',
      answer: 'Ya, semua soal tryout dilengkapi pembahasan. Paket Starter mendapat pembahasan teks, Professional dan Ultimate mendapat video pembahasan HD dari mentor ASN yang berpengalaman.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
            <HelpCircle className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar platform, paket tryout, dan cara menggunakan fitur-fitur kami.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl border-2 transition-all duration-200 ${
                openQuestion === index
                  ? 'border-primary-200 shadow-lg'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 rounded-2xl transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openQuestion === index ? (
                    <ChevronUp className="h-6 w-6 text-primary-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-slate-400" />
                  )}
                </div>
              </button>
              
              {openQuestion === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Masih ada pertanyaan lain?
            </h3>
            <p className="text-slate-600 mb-6">
              Tim support kami siap membantu kamu 24/7 melalui berbagai channel komunikasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onCTAClick('whatsapp')}
                className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Chat WhatsApp
              </button>
              <button 
                onClick={() => onCTAClick('email')}
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
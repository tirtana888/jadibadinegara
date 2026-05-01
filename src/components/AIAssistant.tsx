import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AIAssistantProps {
  questionContext?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ questionContext }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Halo! Saya AI Assistant DNA Bisnis. Saya di sini untuk membantu kamu memahami logika dan cara berpikir dalam menyelesaikan soal. Ingat, saya tidak akan memberikan jawaban langsung, tapi akan membimbing kamu menemukan jawabannya sendiri! Ada yang ingin ditanyakan?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.parentElement;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('pancasila') || lowerMessage.includes('sila')) {
      return '💡 Untuk soal tentang Pancasila, coba pikirkan dengan cara ini:\n\n🔍 Cara analisis:\n• Apakah soal menanyakan jumlah, urutan, atau isi sila?\n• Ingat bahwa Pancasila punya struktur hierarkis\n• Sila pertama adalah fondasi, sila kelima adalah tujuan\n\n📝 Tips penyelesaian:\n1. Baca dengan teliti apa yang ditanyakan\n2. Eliminasi jawaban yang jelas salah\n3. Jika tentang urutan, ingat kata kunci tiap sila\n4. Jika tentang penerapan, pilih yang paling mendasar\n\nCoba analisis lagi soalnya dengan pendekatan ini!';
    }

    if (lowerMessage.includes('proklamator') || lowerMessage.includes('kemerdekaan') || lowerMessage.includes('jawab')) {
      return '💡 Untuk soal sejarah kemerdekaan, gunakan logika ini:\n\n🔍 Strategi berpikir:\n• Fokus pada tokoh utama vs tokoh pendukung\n• Perhatikan peran spesifik yang ditanyakan\n• Bedakan antara "yang melakukan" vs "yang hadir"\n\n📝 Cara eliminasi jawaban:\n1. Coret jawaban dengan tokoh yang jelas tidak relevan\n2. Perhatikan tanggal/periode yang ditanyakan\n3. Jika ada 2 nama dalam pilihan, pastikan keduanya benar\n4. Ingat prinsip: yang paling berperan langsung\n\n⚠️ Jangan terkecoh dengan tokoh-tokoh yang "terkenal" tapi tidak sesuai konteks soal!';
    }

    if (lowerMessage.includes('uud') || lowerMessage.includes('1945')) {
      return '💡 Untuk soal tentang UUD 1945, gunakan pendekatan ini:\n\n🔍 Cara berpikir logis:\n• Perhatikan kata kunci: "disahkan", "diubah", "diamandemen"\n• Bedakan antara peristiwa awal vs perubahan\n• Urutan waktu sangat penting (sebelum/sesudah)\n\n📝 Strategi penyelesaian:\n1. Tentukan konteks waktu yang ditanyakan\n2. Jika tentang tanggal, pikirkan logika urutan peristiwa\n3. Proklamasi dulu, baru pengesahan UUD (selisih 1 hari)\n4. Amandemen terjadi jauh kemudian (era reformasi)\n\n💭 Trik: Jika ragu antara 2 tanggal yang berdekatan, pilih yang "setelah" peristiwa utama!';
    }

    if (lowerMessage.includes('cara') || lowerMessage.includes('tips') || lowerMessage.includes('strategi')) {
      return 'Berikut tips mengerjakan tryout SKD:\n\n✓ Baca soal dengan teliti dan pahami yang ditanyakan\n✓ Eliminasi jawaban yang jelas salah terlebih dahulu\n✓ Jangan terlalu lama di satu soal, tandai dan kerjakan nanti\n✓ Kelola waktu dengan baik - rata-rata 90 detik per soal\n✓ Jika ragu, pilih jawaban yang paling masuk akal\n✓ Review jawaban sebelum submit\n\nYang penting tenang dan percaya diri! 💪';
    }

    if (lowerMessage.includes('twk') || lowerMessage.includes('wawasan kebangsaan')) {
      return 'TWK (Tes Wawasan Kebangsaan) menguji pengetahuan tentang:\n\n📚 Pancasila dan UUD 1945\n📚 Bhinneka Tunggal Ika dan NKRI\n📚 Sejarah perjuangan bangsa\n📚 Peran Indonesia di kancah internasional\n📚 Bahasa Indonesia\n📚 Tata negara dan konstitusi\n\nFokus pada pemahaman nilai-nilai kebangsaan dan sejarah Indonesia ya!';
    }

    if (lowerMessage.includes('tiu') || lowerMessage.includes('intelegensi')) {
      return 'TIU (Tes Intelegensi Umum) menguji kemampuan:\n\n🧠 Kemampuan Verbal - sinonim, antonim, analogi\n🧠 Kemampuan Numerik - deret angka, aritmatika\n🧠 Kemampuan Figural - gambar, pola, bentuk\n🧠 Kemampuan Logika - penalaran, kesimpulan\n\nLatih secara rutin untuk meningkatkan kecepatan dan ketepatan!';
    }

    if (lowerMessage.includes('tkp') || lowerMessage.includes('karakteristik')) {
      return 'TKP (Tes Karakteristik Pribadi) menilai:\n\n⭐ Integritas dan kejujuran\n⭐ Pelayanan publik\n⭐ Jejaring kerja\n⭐ Sosial budaya\n⭐ Teknologi informasi\n⭐ Profesionalisme\n\nTips: Pilih jawaban yang menunjukkan sikap ASN ideal - proaktif, bertanggung jawab, dan berorientasi pada pelayanan publik!';
    }

    if (lowerMessage.includes('waktu') || lowerMessage.includes('durasi')) {
      return 'Durasi tes SKD CPNS biasanya:\n\n⏱️ TWK: 35 soal - 35 menit\n⏱️ TIU: 30 soal - 40 menit  \n⏱️ TKP: 35 soal - 30 menit\n\nTotal: 100 soal dalam 105 menit. Manajemen waktu sangat penting!';
    }

    if (lowerMessage.includes('passing grade') || lowerMessage.includes('nilai')) {
      return 'Passing grade SKD CPNS 2024:\n\n📊 SKD Total: minimal 311 dari 550\n📊 TWK: minimal 75 dari 175\n📊 TIU: minimal 80 dari 175\n📊 TKP: minimal 143 dari 200\n\nHarus memenuhi semua syarat minimal ini untuk lulus ke tahap SKB!';
    }

    if (lowerMessage.includes('terima kasih') || lowerMessage.includes('thanks')) {
      return 'Sama-sama! Senang bisa membantu. Semangat mengerjakan tryout-nya! Jika ada pertanyaan lain, jangan ragu untuk bertanya ya! 😊';
    }

    if (lowerMessage.includes('halo') || lowerMessage.includes('hai') || lowerMessage.includes('hi')) {
      return 'Halo! Senang bertemu dengan kamu! 👋\n\nSaya di sini untuk membantu kamu memahami cara berpikir dan logika menyelesaikan soal, bukan memberikan jawaban langsung ya!\n\nAda soal yang ingin didiskusikan strateginya? Atau butuh tips cara analisis soal?';
    }

    return '🤔 Hmm, saya tidak bisa memberikan jawaban langsung. Tapi saya bisa membantu kamu dengan:\n\n💡 Cara berpikir logis untuk menyelesaikan soal\n💡 Strategi eliminasi jawaban\n💡 Tips analisis pertanyaan\n💡 Metode penyelesaian masalah\n\n📌 Coba tanyakan seperti ini:\n• "Bagaimana cara menganalisis soal tentang...?"\n• "Apa strategi untuk soal tipe ini?"\n• "Bagaimana logika penyelesaiannya?"\n\nYuk, kita diskusikan cara berpikir untuk menyelesaikan soalnya!';
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    'Bagaimana cara analisis soal Pancasila?',
    'Strategi eliminasi jawaban',
    'Logika soal sejarah kemerdekaan',
    'Tips mengerjakan tryout'
  ];

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col h-full lg:sticky lg:top-8 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-base">AI Assistant</h3>
            <div className="flex items-center space-x-1 text-xs text-white/90">
              <Sparkles className="h-3 w-3" />
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" style={{ height: '500px', maxHeight: 'calc(100vh - 250px)' }}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.sender === 'user'
                  ? 'bg-primary-600'
                  : 'bg-gradient-to-br from-blue-500 to-green-500'
              }`}>
                {message.sender === 'user' ? (
                  <User className="h-4 w-4 text-white" />
                ) : (
                  <Bot className="h-4 w-4 text-white" />
                )}
              </div>
              <div>
                <div className={`rounded-2xl px-4 py-2.5 ${
                  message.sender === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-slate-900 shadow-md border border-gray-100'
                }`}>
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                </div>
                <span className="text-xs text-slate-400 mt-1 block px-2">
                  {message.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2 max-w-[85%]">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {messages.length === 1 && (
        <div className="px-4 py-3 bg-white border-t border-gray-200">
          <p className="text-xs text-slate-600 mb-2 font-semibold">Pertanyaan cepat:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => {
                  setInputText(question);
                  setTimeout(() => handleSend(), 100);
                }}
                className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors border border-blue-200"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ketik pertanyaan..."
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim() || isTyping}
            className={`p-2.5 rounded-xl transition-all duration-200 ${
              inputText.trim() && !isTyping
                ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg transform hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <p className="text-xs text-slate-400 mt-2 text-center">
          AI ini membantu menjelaskan materi dan tips tryout
        </p>
      </div>
    </div>
  );
};

export default AIAssistant;

import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Loader2, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatbotProps {
  onClose: () => void;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Halo! Saya AI Sales Assistant dari Jadi Abdi Negara. Saya siap membantu Anda dengan informasi tentang program tryout dan bimbingan belajar kami. Ada yang bisa saya bantu?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

      if (!apiKey || apiKey === 'your_openai_api_key_here') {
        throw new Error('OpenAI API key not configured');
      }

      const systemPrompt = `Kamu adalah AI Sales Assistant untuk "Jadi Abdi Negara", platform tryout dan bimbingan belajar online dan offline terpercaya di Indonesia.

INFORMASI PROGRAM:

PROGRAM ONLINE:
1. STAN & Kedinasan (PKN STAN)
   - Basic: Rp 299.000 (3 bulan) - 2000+ soal, 20 tryout
   - Premium: Rp 499.000 (6 bulan) - 5000+ soal, 50 tryout, konsultasi mentor
   - VIP: Rp 799.000 (1 tahun) - Unlimited soal, bimbingan personal 1-on-1

2. Sekolah Kedinasan (STIS, STIN, IPDN, STMKG, STSN)
   - Basic: Rp 349.000 (3 bulan)
   - Premium: Rp 549.000 (6 bulan)
   - VIP: Rp 899.000 (1 tahun)

3. CPNS & PPPK (SKD: TWK, TIU, TKP)
   - Basic: Rp 249.000 (3 bulan)
   - Premium: Rp 449.000 (6 bulan)
   - VIP: Rp 699.000 (1 tahun)

PROGRAM OFFLINE (Tatap Muka):
Lokasi: Jakarta, Bandung, Surabaya, Yogyakarta, Semarang

1. STAN & Kedinasan
   - Kelas Intensif: Rp 2.499.000 (2 bulan, 24 pertemuan)
   - Super Camp: Rp 4.999.000 (3 bulan, 48 pertemuan) - TERPOPULER
   - Private Class: Rp 8.999.000 (3 bulan, flexible, 1-on-1)

2. Sekolah Kedinasan
   - Kelas Intensif: Rp 2.799.000
   - Super Camp: Rp 5.499.000
   - Private Class: Rp 9.499.000

3. CPNS & PPPK
   - Kelas Intensif: Rp 1.999.000
   - Super Camp: Rp 3.999.000
   - Private Class: Rp 6.999.000

KEUNGGULAN:
- Teknologi AI Learning dengan Deep Learning Analysis
- Mentor ASN berpengalaman & alumni sekolah kedinasan
- Sistem CAT BKN Real
- Ranking nasional real-time
- Garansi uang kembali*
- Sertifikat resmi
- Grup belajar eksklusif

KONTAK:
- WhatsApp: +62 811-9999-7777 (24/7)
- Email: info@jadiabdinegara.com
- Head Office: Jl. Arifin No. 89, Surakarta

Tugasmu:
1. Jawab pertanyaan dengan ramah, profesional, dan informatif
2. Rekomendasikan program yang sesuai dengan kebutuhan calon siswa
3. Jelaskan keunggulan program dengan menarik
4. Dorong calon siswa untuk mendaftar dengan menyebutkan benefit spesifik
5. Jika ditanya harga, sebutkan dengan jelas dan jelaskan value yang didapat
6. Selalu akhiri dengan call-to-action yang jelas
7. Gunakan bahasa Indonesia yang natural dan tidak kaku

PENTING: Fokus pada sales conversion dengan pendekatan consultative selling. Pahami kebutuhan mereka dulu, baru tawarkan solusi terbaik.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map(m => ({
              role: m.role,
              content: m.content
            })),
            { role: 'user', content: userMessage.content }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Maaf, terjadi kesalahan. Silakan hubungi kami langsung di WhatsApp: +62 811-9999-7777 untuk bantuan lebih lanjut.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickActions = [
    'Info program STAN',
    'Info program CPNS',
    'Harga tryout online',
    'Lokasi bimbel offline',
    'Cara mendaftar'
  ];

  const handleQuickAction = (action: string) => {
    setInput(action);
    inputRef.current?.focus();
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-200 flex items-center space-x-2"
      >
        <Bot className="h-6 w-6" />
        <span className="font-semibold">AI Sales Assistant</span>
      </button>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full md:w-96 flex flex-col overflow-hidden border border-gray-200 max-h-[600px]">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">AI Sales Assistant</h3>
            <p className="text-xs text-white/80">Jadi Abdi Negara</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <Minimize2 className="h-5 w-5" />
          </button>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-3 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-800 shadow-sm border border-gray-100'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="flex items-center space-x-2 mb-2">
                  <Bot className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-600">AI Assistant</span>
                </div>
              )}
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
              <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                {message.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
                <span className="text-sm text-gray-600">AI sedang mengetik...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {messages.length === 1 && (
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-600 mb-2 font-semibold">Pertanyaan Cepat:</p>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action)}
                className="text-xs bg-white border border-blue-200 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-end space-x-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ketik pesan Anda..."
            rows={1}
            className="flex-1 resize-none border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Powered by OpenAI • Jadi Abdi Negara
        </p>
      </div>
    </div>
  );
};

export default AIChatbot;

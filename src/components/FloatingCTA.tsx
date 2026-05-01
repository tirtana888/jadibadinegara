import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, Bot } from 'lucide-react';
import AIChatbot from './AIChatbot';

interface FloatingCTAProps {
  onCTAClick: (action: string) => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onCTAClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Floating CTA */}
      <div className="fixed bottom-3 left-3 right-3 z-50 md:hidden">
        <div className="bg-secondary-500 text-white rounded-xl shadow-2xl border border-secondary-600">
          <div className="px-4 py-3 text-center">
            <p className="text-xs font-semibold mb-2">Siap jadi ASN? Mulai sekarang!</p>
            <button 
              onClick={() => onCTAClick('coba-gratis')}
              className="w-full bg-primary-700 text-white py-2.5 px-4 rounded-lg font-bold hover:bg-primary-800 transition-colors duration-200 text-sm"
            >
              DAFTAR TRYOUT GRATIS
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Floating Buttons */}
      <div className="hidden md:block fixed right-4 lg:right-6 bottom-4 lg:bottom-6 z-50 space-y-3">
        {/* AI Chatbot */}
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 lg:p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-200 relative group"
          title="AI Sales Assistant"
        >
          <Bot className="h-5 w-5 lg:h-6 lg:w-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat dengan AI Sales Assistant
          </div>
        </button>

        {/* Phone */}
        <button
          onClick={() => onCTAClick('phone')}
          className="bg-primary-600 text-white p-3 lg:p-4 rounded-full shadow-2xl hover:bg-primary-700 transform hover:scale-110 transition-all duration-200"
          title="Telepon"
        >
          <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
        </button>

        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-neutral-800 text-white p-3 lg:p-4 rounded-full shadow-2xl hover:bg-neutral-900 transform hover:scale-110 transition-all duration-200"
          >
            <ArrowUp className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>
        )}
      </div>

      {/* AI Chatbot Window */}
      {showChatbot && (
        <div className="fixed right-4 lg:right-6 bottom-24 lg:bottom-6 z-40 w-[calc(100vw-2rem)] md:w-auto md:mr-20">
          <AIChatbot onClose={() => setShowChatbot(false)} />
        </div>
      )}
    </>
  );
};

export default FloatingCTA;
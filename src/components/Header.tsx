import React, { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onCTAClick: (action: string) => void;
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, onCTAClick, onLoginClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Beranda', href: '#' },
    { id: 'stan', label: 'STAN', href: '#' },
    { id: 'kedinasan', label: 'Kedinasan', href: '#' },
    { id: 'cpns', label: 'CPNS', href: '#' },
    { id: 'demo', label: 'Demo Tryout', href: '#' },
    { id: 'testimonials', label: 'Testimoni', href: '#' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <button
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => handleNavClick('home')}
          >
            <img src="/Untitled design (38).png" alt="Jadi Abdi Negara" className="h-8 w-8 sm:h-10 sm:w-10 mr-1 sm:mr-2" />
            <span className="text-lg sm:text-xl font-bold text-white">Jadi Abdi Negara</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-white hover:text-secondary-300 transition-colors duration-200 font-medium ${
                  currentPage === item.id ? 'text-secondary-400' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-secondary-500 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold hover:bg-secondary-600 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm lg:text-base"
              >
                Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={onLoginClick}
                  className="flex items-center space-x-2 text-white hover:text-secondary-300 transition-colors duration-200 font-medium"
                >
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </button>
                <button
                  onClick={onLoginClick}
                  className="bg-secondary-500 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold hover:bg-secondary-600 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm lg:text-base"
                >
                  Daftar Gratis
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary-600 rounded-lg mt-2 shadow-xl mx-2">
            <div className="px-3 pt-3 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 text-white hover:text-secondary-300 hover:bg-primary-500 rounded-lg transition-colors duration-200 font-medium ${
                    currentPage === item.id ? 'text-secondary-400 bg-primary-500' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-1 pt-3 space-y-3 border-t border-primary-500 mt-3">
                {user ? (
                  <button
                    onClick={() => {
                      navigate('/dashboard');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-secondary-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-secondary-600 transition-colors duration-200 text-center"
                  >
                    Dashboard
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        onLoginClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-white text-primary-700 px-4 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                    >
                      <LogIn className="h-5 w-5" />
                      <span>Login</span>
                    </button>
                    <button
                      onClick={() => {
                        onLoginClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-secondary-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-secondary-600 transition-colors duration-200 text-center"
                    >
                      Daftar Gratis
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
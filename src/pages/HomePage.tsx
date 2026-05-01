import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import STAN from '../components/STAN';
import Kedinasan from '../components/Kedinasan';
import CPNS from '../components/CPNS';
import CheckoutOnline from '../components/CheckoutOnline';
import CheckoutOffline from '../components/CheckoutOffline';
import TryoutDemo from '../components/TryoutDemo';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';
import RegistrationModal from '../components/RegistrationModal';

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showLogin) {
      setShowRegistrationModal(true);
    }
    if (location.state?.checkout && location.state?.program) {
      const checkoutType = location.state.checkout;
      const program = location.state.program;
      if (checkoutType === 'online') {
        handlePageChange(`checkout-${program}-online`);
      } else if (checkoutType === 'offline') {
        handlePageChange(`checkout-${program}-offline`);
      }
    }
  }, [location]);

  const handlePageChange = (page: string) => {
    if (page === currentPage) return;

    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 150);
  };

  const handleCTAClick = (action: string) => {
    switch (action) {
      case 'register':
      case 'daftar-tryout':
        setShowRegistrationModal(true);
        break;
      case 'demo':
      case 'coba-gratis':
        setShowRegistrationModal(true);
        break;
      case 'programs':
        handlePageChange('programs');
        break;
      case 'testimonials':
        handlePageChange('testimonials');
        break;
      case 'checkout-stan':
        handlePageChange('checkout-stan-online');
        break;
      case 'checkout-stan-offline':
        handlePageChange('checkout-stan-offline');
        break;
      case 'checkout-kedinasan':
        handlePageChange('checkout-kedinasan-online');
        break;
      case 'checkout-kedinasan-offline':
        handlePageChange('checkout-kedinasan-offline');
        break;
      case 'checkout-cpns':
        handlePageChange('checkout-cpns-online');
        break;
      case 'checkout-cpns-offline':
        handlePageChange('checkout-cpns-offline');
        break;
      case 'whatsapp':
        window.open('https://wa.me/6287833641467?text=Halo, saya tertarik dengan program tryout CPNS/PPPK', '_blank');
        break;
      case 'phone':
        window.open('tel:+6287833641467', '_self');
        break;
      case 'email':
        window.open('mailto:info@abdinegara.com?subject=Pertanyaan tentang Program Tryout', '_self');
        break;
      default:
        break;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'stan':
        return <STAN onCTAClick={handleCTAClick} />;
      case 'kedinasan':
        return <Kedinasan onCTAClick={handleCTAClick} />;
      case 'cpns':
        return <CPNS onCTAClick={handleCTAClick} />;
      case 'checkout-stan-online':
        return <CheckoutOnline programType="stan" onBack={() => handlePageChange('stan')} onCTAClick={handleCTAClick} />;
      case 'checkout-stan-offline':
        return <CheckoutOffline programType="stan" onBack={() => handlePageChange('stan')} onCTAClick={handleCTAClick} />;
      case 'checkout-kedinasan-online':
        return <CheckoutOnline programType="kedinasan" onBack={() => handlePageChange('kedinasan')} onCTAClick={handleCTAClick} />;
      case 'checkout-kedinasan-offline':
        return <CheckoutOffline programType="kedinasan" onBack={() => handlePageChange('kedinasan')} onCTAClick={handleCTAClick} />;
      case 'checkout-cpns-online':
        return <CheckoutOnline programType="cpns" onBack={() => handlePageChange('cpns')} onCTAClick={handleCTAClick} />;
      case 'checkout-cpns-offline':
        return <CheckoutOffline programType="cpns" onBack={() => handlePageChange('cpns')} onCTAClick={handleCTAClick} />;
      case 'programs':
        return <Programs onCTAClick={handleCTAClick} onProgramClick={handlePageChange} />;
      case 'demo':
        return <TryoutDemo onCTAClick={handleCTAClick} />;
      case 'testimonials':
        return <Testimonials onCTAClick={handleCTAClick} />;
      case 'about':
        return <About onCTAClick={handleCTAClick} />;
      default:
        return (
          <>
            <Hero onCTAClick={handleCTAClick} />
            <Programs onCTAClick={handleCTAClick} onProgramClick={handlePageChange} />
            <Testimonials onCTAClick={handleCTAClick} />
            <FAQ onCTAClick={handleCTAClick} />
          </>
        );
    }
  };

  const handleLoginSuccess = () => {
    setShowRegistrationModal(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        onCTAClick={handleCTAClick}
        onLoginClick={() => setShowRegistrationModal(true)}
      />
      <main className={`transition-all duration-300 ease-in-out ${
        isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
      }`}>
        {renderPage()}
      </main>
      <Footer setCurrentPage={handlePageChange} />
      <FloatingCTA onCTAClick={handleCTAClick} />

      {showRegistrationModal && (
        <RegistrationModal
          onClose={() => setShowRegistrationModal(false)}
          onSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
};

export default HomePage;

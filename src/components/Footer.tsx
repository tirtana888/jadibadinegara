import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/Untitled design (38).png" alt="Jadi Abdi Negara" className="h-10 w-10 mr-2" />
              <span className="text-2xl font-bold text-white">Jadi Abdi Negara</span>
            </div>
            <p className="text-primary-200 leading-relaxed mb-6">
              Platform tryout dan bimbingan belajar online terpercaya untuk persiapan CPNS, PPPK, Sekolah Kedinasan, dan STAN.
              Dengan mentor ASN berpengalaman dan teknologi terdepan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-700 p-3 rounded-full hover:bg-primary-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-700 p-3 rounded-full hover:bg-primary-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-700 p-3 rounded-full hover:bg-primary-600 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-700 p-3 rounded-full hover:bg-primary-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Menu Utama</h3>
            <ul className="space-y-3">
              {[
                { label: 'Beranda', id: 'home' },
                { label: 'Tentang Kami', id: 'about' },
                { label: 'Program STAN', id: 'stan' },
                { label: 'Program Kedinasan', id: 'kedinasan' },
                { label: 'Program CPNS', id: 'cpns' },
                { label: 'Demo Tryout', id: 'demo' },
                { label: 'Testimoni Alumni', id: 'testimonials' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-primary-200 hover:text-secondary-500 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6">Program Kami</h3>
            <ul className="space-y-3 text-primary-200">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('stan');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-secondary-500 transition-colors duration-200"
                >
                  Tryout STAN
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('kedinasan');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-secondary-500 transition-colors duration-200"
                >
                  Tryout STIS, STIN, IPDN
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('kedinasan');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-secondary-500 transition-colors duration-200"
                >
                  Tryout STMKG, STSN
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('cpns');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-secondary-500 transition-colors duration-200"
                >
                  Tryout CPNS SKD
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('cpns');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-secondary-500 transition-colors duration-200"
                >
                  Tryout PPPK Guru
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('cpns');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-secondary-500 transition-colors duration-200"
                >
                  Tryout PPPK Kesehatan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('cpns');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-secondary-500 transition-colors duration-200"
                >
                  Tryout PPPK Teknis
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('demo');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-secondary-500 transition-colors duration-200"
                >
                  Bimbel Live Class
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Hubungi Kami</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-secondary-500 mt-1 flex-shrink-0" />
                <div className="text-primary-200">
                  <p className="font-semibold">Customer Service</p>
                  <p>+62 878-3364-1467</p>
                  <p className="text-sm">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-secondary-500 mt-1 flex-shrink-0" />
                <div className="text-primary-200">
                  <p className="font-semibold">Email</p>
                  <p>info@jadiabdinegara.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary-500 mt-1 flex-shrink-0" />
                <div className="text-primary-200">
                  <p className="font-semibold">Head Office Digital Operasional</p>
                  <p className="leading-relaxed">
                    Jl. Arifin No. 89<br />
                    Kepatihan Kulon, Kec. Jebres<br />
                    Kota Surakarta<br />
                    Jawa Tengah 57129
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-primary-700 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Metode Pembayaran</h4>
            <div className="flex justify-center items-center space-x-6 flex-wrap gap-y-3">
              {['Bank Transfer', 'BCA', 'Mandiri', 'BRI', 'BNI', 'QRIS', 'OVO', 'GoPay', 'DANA', 'ShopeePay'].map((method) => (
                <div key={method} className="bg-white rounded-lg px-4 py-2 text-slate-900 text-sm font-semibold">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-200 mb-4 md:mb-0">
              <p className="mb-1">&copy; 2024 Jadi Abdi Negara. All rights reserved.</p>
              <p className="text-sm">PT. INDONESIA BERJAYA INOVATIF</p>
            </div>
            <div className="flex space-x-6 text-sm text-primary-200">
              <a href="#" className="hover:text-secondary-500 transition-colors duration-200">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-secondary-500 transition-colors duration-200">Kebijakan Privasi</a>
              <a href="#" className="hover:text-secondary-500 transition-colors duration-200">Bantuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-white !bg-[#f4a261]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="text-xs text-white/60">
            <p>© 2024 Nieruchomości. Wszelkie prawa zastrzeżone.</p>
            <p>NIP: 6211850135 | REGON: 540028724</p>
          </div>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-6">
            <div className="flex flex-wrap justify-center space-x-4 text-xs">
              <Link href="#" className="text-white/60 hover:text-white transition-colors">Polityka prywatności</Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">Regulamin</Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">Cookies</Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">RODO</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;
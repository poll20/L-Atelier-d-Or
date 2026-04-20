import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Sustainability', href: '#' },
  ];

  const social = ['Instagram', 'Pinterest', 'LinkedIn'];

  return (
    <footer className="w-full bg-surface border-t border-outline/10 pt-16 md:pt-32 pb-8 md:pb-16 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center">
        {/* Logo and Tagline */}
        <div className="text-center mb-16 md:mb-24">
          <div className="text-2xl md:text-3xl font-serif uppercase tracking-luxury mb-4">L'Atelier d'Or</div>
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-secondary font-light opacity-60">High Jewelry & Legacy</p>
        </div>

        {/* Links Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-32 w-full mb-16 md:mb-32 border-y border-outline/5 py-12 md:py-16">
          <div className="text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-luxury text-secondary mb-6 md:mb-8 block">Inquiries</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="text-[9px] md:text-[10px] uppercase tracking-label text-on-surface-variant hover:text-on-surface transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-[9px] md:text-[10px] uppercase tracking-label text-on-surface-variant hover:text-on-surface transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-luxury text-secondary mb-6 md:mb-8 block">Connect</h4>
            <ul className="space-y-4">
              {social.map((s) => (
                <li key={s}>
                  <a href="#" className="text-[9px] md:text-[10px] uppercase tracking-label text-on-surface-variant hover:text-on-surface transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-luxury text-secondary mb-6 md:mb-8 block">Maison</h4>
            <p className="text-[9px] md:text-[10px] uppercase tracking-label text-on-surface-variant max-w-[200px] mx-auto md:mx-0 leading-loose">
              12 Place Vendôme<br/>
              75001 Paris, France
            </p>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col md:flex-row justify-between w-full pt-8 border-t border-outline/20 items-center gap-6 opacity-40">
          <p className="text-[9px] uppercase tracking-widest">© 2026 L'ATELIER D'OR. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <p className="text-[9px] uppercase tracking-widest">FORGED IN EXCELLENCE</p>
            <p className="text-[9px] uppercase tracking-widest">CRAFTED IN PARIS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

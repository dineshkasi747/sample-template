'use client';

import Link from 'next/link';
import { FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-20 pb-6 relative">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img src="/images/JPG/sri-pavansai-logo.png" alt="SRI Pavan Sai Hospital" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-white/70 type-body">
              At Sri Pavan Sai Hospital, we are committed to delivering compassionate, patient-centered healthcare with clinical excellence—because your family's health, comfort, and well-being are our highest priority.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaLinkedinIn, href: '#' },
                { icon: FaYoutube, href: '#' },
                { icon: FaTwitter, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaFacebookF, href: '#' }
              ].map((social, i) => (
                <Link key={i} href={social.href} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] transition-all duration-300">
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="type-h3 mb-6 text-white text-[24px]">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact Us', href: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/70 hover:text-[var(--color-accent)] link-hover-color flex items-center transition-colors">
                    <span className="mr-2 text-[var(--color-accent)]">•</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="type-h3 mb-6 text-white text-[24px]">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-white/70">
                <FaMapMarkerAlt className="text-[var(--color-accent)] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>Opposite Swamy Vivekananda School, Main Road Jawaharlal Nagar, Sriharipuram, Visakhapatnam-530011, Andhra Pradesh</span>
              </li>
              <li className="flex items-center text-white/70">
                <FaEnvelope className="text-[var(--color-accent)] mr-3 flex-shrink-0" size={18} />
                <span>contact@pavansaihospital.com</span>
              </li>
              <li className="flex items-center text-white/70">
                <FaPhone className="text-[var(--color-accent)] mr-3 flex-shrink-0" size={18} />
                <span>9515236524, 0891 2585858</span>
              </li>
              <li className="flex items-start text-white/70">
                <FaClock className="text-[var(--color-accent)] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>Open 24/7, Everyday</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 text-center text-white/50">
          <p>Copyright 2026 © SRI Pavan Sai Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

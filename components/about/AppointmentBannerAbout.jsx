'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function AppointmentBannerAbout() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 bg-[var(--color-surface)] overflow-hidden border-t border-black/5">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-primary)] rounded-2xl shadow-xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 scroll-reveal" data-animation="fadeInUp">
          
          <div className="text-center lg:text-left space-y-3 lg:max-w-2xl">
            <h2 className="type-h3 text-white scroll-reveal" data-animation="fadeInUp" data-delay="100">
              <span className="scroll-reveal" data-animation="fadeInUp">Need Medical Assistance?</span>
            </h2>
            <p className="type-body text-white/70 scroll-reveal" data-animation="fadeInUp" data-delay="300">
              <span className="scroll-reveal" data-animation="fadeInUp">We are open 24 hours for emergencies and appointments. Reach out to us anytime — your health is our priority.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 scroll-reveal" data-animation="fadeInUp" data-delay="500">
            <a 
              href="https://wa.me/919515236524" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#1da851] transition-all duration-300 font-semibold shadow-lg"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              WhatsApp Us
            </a>
            <a 
              href="tel:+919515236524"
              className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white px-8 py-4 rounded-full hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 font-semibold shadow-lg"
            >
              <FaPhoneAlt className="mr-2" />
              Call: 9515236524
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

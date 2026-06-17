'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaHospital, FaClinicMedical } from 'react-icons/fa';

export default function HeroSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="relative bg-[var(--color-primary)] py-20 lg:py-32 overflow-hidden z-0">
      
      {/* Background gradients for modern overlay */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
      
      {/* Background decorative grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] z-[-1]"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Authentic & Premium branding */}
          <div className="lg:col-span-6 text-white space-y-8">
            <div className="scroll-reveal inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold uppercase tracking-wider text-red-400" data-animation="fadeInDown" data-delay="100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
              </span>
              24 Hours Open Emergency Center
            </div>
            
            <h1 className="type-h1 text-white font-black leading-none scroll-reveal" data-animation="fadeInUp" data-delay="300">
              Pavan Sai Hospital
              <span className="text-[var(--color-accent)] block mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide uppercase">
                24 Hours Healthcare in Visakhapatnam
              </span>
            </h1>
            
            <p className="type-body text-white/80 max-w-lg scroll-reveal text-lg leading-relaxed" data-animation="fadeInUp" data-delay="500">
              Offering high-quality, compassionate, and affordable healthcare services. Visited by experienced doctors, fully prepared for minor procedures, diagnostic lab tests, and trauma emergencies.
            </p>

            {/* Unique features in capsules */}
            <div className="flex flex-wrap gap-3 scroll-reveal" data-animation="fadeInUp" data-delay="700">
              {['24/7 Pharmacy', 'OPD Consultations', 'Diagnostic Tests', 'Nebulization'].map((feat, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/90 font-medium">
                  ✓ {feat}
                </span>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 scroll-reveal" data-animation="fadeInUp" data-delay="900">
              <a 
                href="https://wa.me/919515236524" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#1da851] hover:scale-105 hover:shadow-[#25D366]/20 transition-all duration-300 font-bold group shadow-lg"
              >
                <FaWhatsapp className="mr-2.5 text-xl" />
                <span>WhatsApp Us</span>
              </a>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[var(--color-primary)] hover:scale-105 transition-all duration-300 font-bold group shadow-lg"
              >
                <FaPhoneAlt className="mr-2.5 text-red-500" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic framed Real hospital image */}
          <div className="lg:col-span-6 relative w-full flex justify-center py-6">
            
            {/* Background design elements */}
            <div className="absolute right-6 bottom-6 w-[85%] h-[85%] border-2 border-red-600/35 rounded-3xl z-0 transform translate-x-3 translate-y-3 pointer-events-none hidden sm:block"></div>
            <div className="absolute left-6 top-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl z-0 pointer-events-none"></div>

            {/* Image Container with premium frame styling */}
            <div className="relative z-10 w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white/10 scroll-reveal" data-animation="paperReveal">
              <img 
                src="/images/JPG/pavan-sai-hospital-front.jpg" 
                alt="Pavan Sai Hospital - 24 Hours Signboard" 
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-1000 hover:scale-105" 
              />
              
              {/* Bottom gradient fade inside image */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Overlapping badge 1 - Bottom Center */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-[var(--color-primary)] px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 z-20 border border-gray-100 whitespace-nowrap scroll-reveal" data-animation="fadeInUp" data-delay="1100">
              <FaClinicMedical className="text-red-600 text-xl" />
              <div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Sai Store Inside</div>
                <div className="text-sm font-extrabold text-[var(--color-primary)]">24h Medical Store</div>
              </div>
            </div>

            {/* Floating badge 2 - Top Right */}
            <div className="absolute top-4 right-[-10px] bg-red-600 text-white px-4 py-2 rounded-full shadow-lg text-xs font-bold flex items-center gap-1.5 z-20 scroll-reveal" data-animation="fadeInDown" data-delay="1300">
              <FaMapMarkerAlt />
              <span>Sriharipuram, Visakhapatnam</span>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}

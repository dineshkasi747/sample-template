'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function AboutIntroSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
              <span className="scroll-reveal" data-animation="fadeInUp">About Us</span>
            </span>
            
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="200">
              <SplitText text="Your Health, Our Priority – Always." />
            </h2>
            
            <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="400">
              <span className="scroll-reveal" data-animation="fadeInUp">
                Sree Pavan Sai Hospital is a trusted 24-hour healthcare facility located in Sriharipuram, Visakhapatnam, Andhra Pradesh. We are dedicated to providing compassionate, affordable, and high-quality medical care to every patient who walks through our doors. Our hospital is equipped with modern facilities and staffed by experienced medical professionals who are committed to your well-being.
              </span>
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 mt-6 border-t border-gray-100 scroll-reveal" data-animation="fadeInUp" data-delay="600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-[var(--color-accent)]" size={18} />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-primary)]/50 font-medium">For Appointments</p>
                  <a href="tel:+919515236524" className="font-bold text-[var(--color-primary)] text-lg hover:text-[var(--color-accent)] transition-colors">9515236524</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-[var(--color-accent)]" size={18} />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-primary)]/50 font-medium">Location</p>
                  <p className="font-bold text-[var(--color-primary)] text-sm">Sriharipuram, Visakhapatnam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hospital Photo */}
          <div className="relative w-full scroll-reveal" data-animation="fadeInUp" data-delay="300">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="/images/JPG/sree-pavan-sai-hospital.png" alt="Sree Pavan Sai Hospital - 24 Hours Healthcare" className="w-full h-auto object-cover" />
            </div>
            {/* 24 Hours Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl shadow-lg font-bold text-lg">
              24 Hours Open
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

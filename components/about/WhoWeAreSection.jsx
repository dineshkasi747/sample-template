'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaCheckCircle } from 'react-icons/fa';

export default function WhoWeAreSection() {
  const sectionRef = useScrollAnimation();

  const facilities = [
    'Clean & Safe Environment',
    'Affordable Treatment',
    'Experienced Doctors',
    'Trusted by Families',
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Image */}
          <div className="relative scroll-reveal" data-animation="slideInLeft">
            <div className="rounded-2xl overflow-hidden shadow-2xl scroll-reveal" data-animation="paperReveal">
              <img src="/images/JPG/sree-pavan-sai-hospital.png" alt="SRI Pavan Sai Hospital & Sai Medical Store" className="w-full h-auto object-cover scroll-reveal" data-animation="paperReveal" />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-6">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
              <span className="scroll-reveal" data-animation="fadeInUp">Who We Are</span>
            </span>
            
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="300">
              <SplitText text="Compassionate Care, Every Hour, Every Day." />
            </h2>
            
            <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="500">
              <span className="scroll-reveal" data-animation="fadeInUp">
                At SRI Pavan Sai Hospital, we believe that quality healthcare should be accessible and affordable for everyone. Located in Sriharipuram, Andhra Pradesh, our hospital has been serving the local community with dedication and compassion. We provide round-the-clock emergency care, OPD consultations, diagnostic services, and an in-house pharmacy — all under one roof.
              </span>
            </p>

            <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="600">
              <span className="scroll-reveal" data-animation="fadeInUp">
                Our attached Sai Medical & General Store ensures that all prescribed medicines are readily available, making the entire treatment process seamless and convenient for our patients and their families.
              </span>
            </p>
            
            {/* Facilities Checklist */}
            <ul className="space-y-3 pt-4 scroll-reveal" data-animation="fadeInUp" data-delay="700">
              {facilities.map((item, i) => (
                <li key={i} className="flex items-center text-lg font-medium text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">
                  <FaCheckCircle className="text-[var(--color-accent)] mr-3 flex-shrink-0 scroll-reveal" size={22} data-animation="fadeInUp" />
                  <span className="scroll-reveal" data-animation="fadeInUp">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

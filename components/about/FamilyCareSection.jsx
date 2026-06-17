'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaClock, FaUserMd, FaShieldAlt, FaRupeeSign } from 'react-icons/fa';

export default function FamilyCareSection() {
  const sectionRef = useScrollAnimation();

  const highlights = [
    {
      icon: FaClock,
      title: "24 Hours Emergency Care",
      body: "Our emergency department is open around the clock, ensuring immediate medical attention whenever you need it — day or night.",
      delay: 100
    },
    {
      icon: FaUserMd,
      title: "Experienced Doctors",
      body: "Our team of qualified and experienced physicians provides expert medical consultation and treatment across multiple specialties.",
      delay: 300
    },
    {
      icon: FaShieldAlt,
      title: "Clean & Safe Environment",
      body: "We maintain the highest standards of hygiene and safety protocols to ensure a clean, comfortable, and infection-free environment for all patients.",
      delay: 500
    },
    {
      icon: FaRupeeSign,
      title: "Affordable Treatment",
      body: "Quality healthcare should not be a luxury. Our treatment plans and health packages are designed to be accessible and affordable for every family.",
      delay: 700
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="type-h3 text-[var(--color-accent)] scroll-reveal mb-4" data-animation="fadeInUp" data-delay="100">
            <span className="scroll-reveal" data-animation="fadeInUp">Why Choose Pavan Sai Hospital?</span>
          </h3>
          
          <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="300">
            <SplitText text="Delivering Quality Healthcare With Compassion & Care." />
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-6 bg-white p-8 rounded-xl shadow-sm border border-black/5 card-hover-lift scroll-reveal"
              data-animation="fadeInUp" 
              data-delay={item.delay}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center scroll-reveal" data-animation="fadeInUp">
                <item.icon className="text-[var(--color-accent)]" size={28} />
              </div>
              <div className="flex-grow space-y-2">
                <h4 className="font-bold text-[var(--color-primary)] text-xl scroll-reveal" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">{item.title}</span>
                </h4>
                <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">{item.body}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaStethoscope, FaBandAid, FaFlask, FaLungs, FaCapsules, FaHeartbeat } from 'react-icons/fa';

export default function TopServicesSection() {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      icon: FaStethoscope,
      title: "OPD Consultation",
      body: "Expert general physician consultations available round the clock for all your primary healthcare needs.",
      delay: 100
    },
    {
      icon: FaBandAid,
      title: "Minor Procedures",
      body: "Professional wound care, dressing, and minor surgical procedures handled by experienced medical staff.",
      delay: 200
    },
    {
      icon: FaFlask,
      title: "Diagnostic Tests",
      body: "Comprehensive lab and pathology services for accurate diagnosis with quick turnaround times.",
      delay: 300
    },
    {
      icon: FaLungs,
      title: "Nebulization",
      body: "Steam and inhalation therapy for respiratory conditions, administered in a comfortable clinical setting.",
      delay: 400
    },
    {
      icon: FaCapsules,
      title: "Pharmacy",
      body: "In-house pharmacy with all medicines available, ensuring seamless access to prescribed medications.",
      delay: 500
    },
    {
      icon: FaHeartbeat,
      title: "Health Checkups",
      body: "Affordable basic health packages designed for preventive care and early detection of health issues.",
      delay: 600
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
            <span className="scroll-reveal" data-animation="fadeInUp">Our Services</span>
          </span>
          
          <h2 className="type-h2 text-[var(--color-primary)] mt-4 scroll-reveal" data-animation="fadeInUp" data-delay="300">
            <SplitText text="Comprehensive Healthcare Services Under One Roof." />
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[var(--color-surface)] p-8 rounded-xl border border-black/5 card-hover-lift scroll-reveal group hover:bg-[var(--color-primary)] transition-colors duration-300"
              data-animation="fadeInUp"
              data-delay={service.delay}
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--color-accent)] transition-colors duration-300 scroll-reveal" data-animation="fadeInUp">
                <service.icon size={28} className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="type-h3 text-xl text-[var(--color-primary)] mb-3 group-hover:text-white transition-colors duration-300 scroll-reveal" data-animation="fadeInUp">
                <span className="scroll-reveal" data-animation="fadeInUp">{service.title}</span>
              </h3>
              <p className="type-body text-[var(--color-primary)]/70 group-hover:text-white/80 transition-colors duration-300 scroll-reveal" data-animation="fadeInUp">
                <span className="scroll-reveal" data-animation="fadeInUp">{service.body}</span>
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

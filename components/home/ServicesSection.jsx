'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaArrowCircleRight, FaStethoscope, FaBone, FaBabyCarriage, FaBriefcaseMedical, FaClock } from 'react-icons/fa';

export default function ServicesSection() {
  const sectionRef = useScrollAnimation();

  // Define actual react-icons instead of simple SVGs for a cleaner, modern look
  const services = [
    { 
      title: "General Surgery", 
      body: "State-of-the-art surgical care specializing in laparoscopic repairs, thyroidectomy, and trauma care.", 
      icon: FaStethoscope,
      href: "/services/general-surgery"
    },
    { 
      title: "Orthopedics (Ortho)", 
      body: "Specialized bone and joint care covering replacements, ligament repairs, and spine surgeries.", 
      icon: FaBone,
      href: "/services/orthopedic-clinic"
    },
    { 
      title: "Gynecology", 
      body: "Comprehensive care for women, routine wellness, normal deliveries, and C-sections.", 
      icon: FaBabyCarriage,
      href: "/services/gynecology-obstetrics"
    },
    { 
      title: "General Medicine", 
      body: "Primary consultations and long-term care management for diabetes, blood pressure, and chronic issues.", 
      icon: FaBriefcaseMedical,
      href: "/services/general-medicine"
    },
    { 
      title: "24/7 Emergency", 
      body: "Round-the-clock emergency stabilization with dedicated trauma beds and in-house pharmacy.", 
      icon: FaClock,
      href: "/services/pharmacy-emergency"
    }
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-[var(--color-primary)] relative overflow-hidden z-0">
      
      {/* Background radial gradients for premium feel */}
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal" data-animation="fadeInUp">
        
        {/* Section Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto scroll-reveal" data-animation="fadeInUp">
          <span className="type-label text-red-500 font-bold tracking-widest scroll-reveal" data-animation="fadeInUp">
            Medical Services
          </span>
          <h2 className="type-h2 text-white font-extrabold mt-4 scroll-reveal" data-animation="fadeInUp">
            <SplitText text="We are Providing Best Services." />
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 scroll-reveal" data-animation="fadeInUp">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-2 group scroll-reveal flex flex-col justify-between"
              data-animation="fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated glowing bottom bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-500 group-hover:w-full"></div>

              <div>
                {/* Icon Container */}
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-white transition-all duration-300 group-hover:bg-red-600 group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-red-600/30 scroll-reveal" data-animation="fadeInUp">
                  <service.icon size={28} className="scroll-reveal" data-animation="fadeInUp" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 scroll-reveal" data-animation="fadeInUp">{service.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8 line-clamp-4 scroll-reveal" data-animation="fadeInUp">{service.body}</p>
              </div>
              
              <Link 
                href={service.href} 
                className="inline-flex items-center text-red-400 font-semibold transition-all duration-300 scroll-reveal group/link text-sm mt-auto" 
                data-animation="fadeInUp"
              >
                <span className="scroll-reveal group-hover/link:text-white transition-colors" data-animation="fadeInUp">Explore Service</span>
                <FaArrowCircleRight className="ml-2 text-base scroll-reveal text-red-400 group-hover/link:text-white group-hover/link:translate-x-1 transition-all" data-animation="fadeInUp" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

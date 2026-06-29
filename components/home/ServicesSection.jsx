'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaArrowCircleRight } from 'react-icons/fa';

// Custom, detailed anatomical SVG illustration components representing each Centre of Excellence
const CardiologyIcon = () => (
  <div className="relative w-36 h-36 flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-transform duration-500">
    {/* Outer dashed spinning circle */}
    <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/50 animate-[spin_25s_linear_infinite] group-hover:border-cyan-400 group-hover:animate-[spin_12s_linear_infinite]"></div>
    {/* Inner solid thin circle */}
    <div className="absolute inset-2.5 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors duration-500"></div>
    {/* Soft inner glow */}
    <div className="absolute inset-5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-500"></div>
    
    {/* Detailed Heart/ECG Vector */}
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-cyan-400 relative z-10 transition-transform duration-500 group-hover:scale-110">
      <path
        d="M50 30 C45 20, 30 20, 25 35 C20 50, 45 75, 50 80 C55 75, 80 50, 75 35 C70 20, 55 20, 50 30 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M46 29 V22 H41" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 29 V18 H59" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 52 H40 L44 38 L48 64 L52 46 L55 55 H72" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const OrthopaedicsIcon = () => (
  <div className="relative w-36 h-36 flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/50 animate-[spin_25s_linear_infinite] group-hover:border-cyan-400 group-hover:animate-[spin_12s_linear_infinite]"></div>
    <div className="absolute inset-2.5 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors duration-500"></div>
    <div className="absolute inset-5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-500"></div>
    
    {/* Detailed Knee Joint Bone Vector */}
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-cyan-400 relative z-10 transition-transform duration-500 group-hover:scale-110">
      <path d="M50 42 V22 M44 22 C44 18, 56 18, 56 22 M44 42 C44 46, 56 46, 56 42" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M47 56 V78 M44 78 C44 81, 50 81, 50 78 M44 56 C44 53, 50 53, 50 56" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54 56 V78 M52 78 C52 81, 56 81, 56 78 M52 56 C52 53, 56 53, 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="49" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M41 48 C39 50, 39 52, 41 54" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M59 48 C61 50, 61 52, 59 54" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

const NeurologyIcon = () => (
  <div className="relative w-36 h-36 flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/50 animate-[spin_25s_linear_infinite] group-hover:border-cyan-400 group-hover:animate-[spin_12s_linear_infinite]"></div>
    <div className="absolute inset-2.5 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors duration-500"></div>
    <div className="absolute inset-5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-500"></div>
    
    {/* Detailed Brain Vector */}
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-cyan-400 relative z-10 transition-transform duration-500 group-hover:scale-110">
      <path d="M50 25 C41 25, 33 29, 29 37 C25 44, 25 54, 31 59 C29 63, 31 69, 37 73 C41 76, 48 74, 50 69" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 25 C59 25, 67 29, 71 37 C75 44, 75 54, 69 59 C71 63, 69 69, 63 73 C59 76, 52 74, 50 69" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 69 V79 H52 V69" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 32 C38 34, 38 41, 44 43" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M56 32 C62 34, 62 41, 56 43" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M33 46 C37 48, 41 46, 41 51" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M67 46 C63 48, 59 46, 59 51" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M39 59 C43 61, 45 57, 47 61" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M61 59 C57 61, 55 57, 53 61" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </div>
);

const GastroenterologyIcon = () => (
  <div className="relative w-36 h-36 flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/50 animate-[spin_25s_linear_infinite] group-hover:border-cyan-400 group-hover:animate-[spin_12s_linear_infinite]"></div>
    <div className="absolute inset-2.5 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors duration-500"></div>
    <div className="absolute inset-5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-500"></div>
    
    {/* Detailed Stomach Vector */}
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-cyan-400 relative z-10 transition-transform duration-500 group-hover:scale-110">
      <path d="M44 18 L47 34 C50 37, 61 37, 65 44 C69 51, 69 64, 57 71 C45 77, 30 71, 34 57 C36 49, 41 47, 43 39 L41 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M57 71 C61 71, 67 75, 67 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 48 C48 50, 52 48, 54 53" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-60" />
      <path d="M41 57 C45 59, 49 57, 51 62" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-60" />
    </svg>
  </div>
);

const PulmonologyIcon = () => (
  <div className="relative w-36 h-36 flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/50 animate-[spin_25s_linear_infinite] group-hover:border-cyan-400 group-hover:animate-[spin_12s_linear_infinite]"></div>
    <div className="absolute inset-2.5 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors duration-500"></div>
    <div className="absolute inset-5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-500"></div>
    
    {/* Detailed Lungs Vector */}
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-cyan-400 relative z-10 transition-transform duration-500 group-hover:scale-110">
      <path d="M50 20 V36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 36 C42 36, 32 38, 28 48 C24 58, 26 74, 40 76 C44 76, 48 68, 48 62 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M52 36 C58 36, 68 38, 72 48 C76 58, 74 74, 60 76 C56 76, 52 68, 52 62 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M46 42 C40 44, 36 50, 34 56" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M54 42 C60 44, 64 50, 66 56" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M48 50 C44 52, 42 56, 40 60" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-60" />
      <path d="M52 50 C56 52, 58 56, 60 60" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-60" />
    </svg>
  </div>
);

export default function ServicesSection() {
  const sectionRef = useScrollAnimation();

  // Defined dynamic links based on data/services config
  const centres = [
    { 
      title: "Cardiology", 
      body: "Expert cardiovascular care, precise heart disease screening, and prevention plans.", 
      icon: CardiologyIcon,
      href: "/services/cardiology"
    },
    { 
      title: "Orthopaedics", 
      body: "Specialized joint reconstruction, bone fracture treatment, and active rehabilitation care.", 
      icon: OrthopaedicsIcon,
      href: "/services/orthopedic-clinic"
    },
    { 
      title: "Neurology", 
      body: "Comprehensive brain, spine, nerve consultations, and targeted motor skill therapy.", 
      icon: NeurologyIcon,
      href: "/services/neurology"
    },
    { 
      title: "Gastroenterology", 
      body: "Advanced therapeutic solutions for digestive tract, pancreas, and liver wellness.", 
      icon: GastroenterologyIcon,
      href: "/services/gastroenterology"
    },
    { 
      title: "Pulmonology", 
      body: "Advanced diagnostic chest assessments, COPD, allergy care, and inhalation treatments.", 
      icon: PulmonologyIcon,
      href: "/services/pulmonology"
    }
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-[var(--color-primary)] relative overflow-hidden z-0">
      
      {/* Background glowing design elements */}
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -left-32 -bottom-32 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal" data-animation="fadeInUp">
        
        {/* Section Heading */}
        <div className="text-center mb-24 max-w-3xl mx-auto scroll-reveal" data-animation="fadeInUp">
          <span className="type-label text-cyan-400 font-bold tracking-widest scroll-reveal" data-animation="fadeInUp">
            Medical Excellence
          </span>
          <h2 className="type-h2 text-white font-extrabold mt-4 scroll-reveal" data-animation="fadeInUp">
            <SplitText text="Centres of Excellence" />
          </h2>
        </div>

        {/* Grid Container for Centres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 scroll-reveal" data-animation="fadeInUp">
          {centres.map((centre, index) => {
            const Icon = centre.icon;
            return (
              <div 
                key={index} 
                className="relative overflow-hidden bg-white/5 border border-white/10 p-8 rounded-3xl transition-all duration-500 hover:bg-white/10 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-2 group scroll-reveal flex flex-col justify-between items-center text-center"
                data-animation="fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glowing border outline on hover */}
                <div className="absolute inset-0 pointer-events-none border border-cyan-500/0 group-hover:border-cyan-500/30 rounded-3xl transition-all duration-500"></div>
                {/* Neon bottom glow bar */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></div>

                <div className="flex flex-col items-center">
                  <Icon />
                  <h3 className="text-xl font-bold text-white mb-3 scroll-reveal" data-animation="fadeInUp">
                    {centre.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 scroll-reveal" data-animation="fadeInUp">
                    {centre.body}
                  </p>
                </div>
                
                <Link 
                  href={centre.href} 
                  className="inline-flex items-center text-cyan-400 font-semibold transition-all duration-300 scroll-reveal group/link text-sm mt-auto" 
                  data-animation="fadeInUp"
                >
                  <span className="scroll-reveal group-hover/link:text-white transition-colors" data-animation="fadeInUp">
                    Explore Centre
                  </span>
                  <FaArrowCircleRight className="ml-2 text-base scroll-reveal text-cyan-400 group-hover/link:text-white group-hover/link:translate-x-1 transition-all" data-animation="fadeInUp" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


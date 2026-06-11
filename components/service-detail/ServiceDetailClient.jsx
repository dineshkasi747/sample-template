'use client';

import { useState } from 'react';
import Link from 'next/link';
import ServiceDetailHero from '@/components/service-detail/ServiceDetailHero';
import WorkingProcessSection from '@/components/service-detail/WorkingProcessSection';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { 
  FaHeartPulse,
  FaMicroscope,
  FaFlask,
  FaChildReaching,
  FaHeartCircleBolt,
  FaBrain,
  FaUserDoctor
} from 'react-icons/fa6';
import { 
  FaPlay, 
  FaCheckCircle, 
  FaPlus, 
  FaMinus, 
  FaArrowAltCircleRight,
  FaTimes 
} from 'react-icons/fa';

export default function ServiceDetailClient({ service }) {
  const sectionRef = useScrollAnimation();

  // Modal State
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Accordion State (index of currently open FAQ, default 0)
  const [openFaq, setOpenFaq] = useState(0);

  const sidebarLinks = [
    { title: "Cardiology Clinic", slug: "cardiology-clinic", Icon: FaHeartPulse },
    { title: "Pathology Clinic", slug: "pathology-clinic", Icon: FaMicroscope },
    { title: "Laboratory Analysis", slug: "laboratory-analysis", Icon: FaFlask },
    { title: "Pediatric Clinic", slug: "pediatric-clinic", Icon: FaChildReaching },
    { title: "Cardiac Clinic", slug: "cardiac-clinic", Icon: FaHeartCircleBolt },
    { title: "Neurology Clinic", slug: "neurology-clinic", Icon: FaBrain }
  ];

  return (
    <>
      <ServiceDetailHero service={service} />

      {/* Main 70/30 Layout */}
      <section ref={sectionRef} className="py-24 bg-white">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left Content Column (70%) */}
            <div className="lg:w-[70%] w-full space-y-16">
              
              {/* Video & Description */}
              <div className="space-y-8">
                {/* Video Thumbnail */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden group scroll-reveal" data-animation="fadeInUp">
                  <img 
                    src={service.video_thumbnail} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setIsVideoOpen(true)}
                      className="bg-[var(--color-accent)] text-white w-20 h-20 rounded-full flex items-center justify-center pl-1 hover:scale-110 hover:bg-[var(--color-primary)] transition-all duration-300 shadow-lg"
                    >
                      <FaPlay size={24} />
                    </button>
                  </div>
                </div>

                {/* Description Paragraphs */}
                <div className="space-y-4">
                  {service.description.map((para, idx) => (
                    <p key={idx} className="type-body text-[var(--color-primary)]/80 scroll-reveal" data-animation="fadeInUp" data-delay={100 * idx}>
                      <span className="scroll-reveal" data-animation="fadeInUp">{para}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Health Care Plans */}
              <div className="space-y-8">
                <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">
                  <SplitText text="Health Care Plans." />
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.health_plan_items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 scroll-reveal" data-animation="fadeInUp" data-delay={(idx % 4) * 100}>
                      <FaCheckCircle className="text-[var(--color-accent)] text-xl flex-shrink-0 scroll-reveal" data-animation="fadeInUp" />
                      <span className="type-body text-[var(--color-primary)] font-medium scroll-reveal" data-animation="fadeInUp">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 scroll-reveal" data-animation="fadeInUp">
                  <button className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary)] transition-colors duration-300 scroll-reveal" data-animation="fadeInUp">
                    <span className="scroll-reveal" data-animation="fadeInUp">Get Started</span>
                    <FaArrowAltCircleRight className="scroll-reveal" data-animation="fadeInUp" />
                  </button>
                </div>
              </div>

              {/* Key Benefits FAQ */}
              <div className="space-y-8">
                <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">
                  <SplitText text="Key Benefits." />
                </h2>

                <div className="space-y-3">
                  {service.faq.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div 
                        key={idx} 
                        className="border border-[var(--color-primary)]/10 rounded-xl overflow-hidden scroll-reveal"
                        data-animation="fadeInUp"
                        data-delay={idx * 100}
                      >
                        <div 
                          className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-[var(--color-surface)]' : 'bg-white hover:bg-[var(--color-surface)]'}`}
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        >
                          <span className="type-body font-semibold text-[var(--color-primary)] pr-4">{faq.question}</span>
                          <div className="text-[var(--color-accent)] flex-shrink-0">
                            {isOpen ? <FaMinus /> : <FaPlus />}
                          </div>
                        </div>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <div className={`px-6 pb-4 type-body text-[var(--color-primary)]/70 ${isOpen ? 'bg-[var(--color-surface)]' : 'bg-white'}`}>
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Sidebar Column (30%) */}
            <div className="lg:w-[30%] w-full lg:sticky lg:top-28">
              <div className="bg-[var(--color-primary)] rounded-2xl p-8 scroll-reveal" data-animation="fadeInUp">
                <h3 className="type-h3 text-white mb-6 scroll-reveal" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">Medical Service</span>
                </h3>

                <div className="space-y-2 mb-8">
                  {sidebarLinks.map((link, idx) => {
                    const isActive = link.slug === service.slug;
                    return (
                      <Link 
                        key={idx} 
                        href={`/services/${link.slug}`}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 scroll-reveal ${isActive ? 'bg-[var(--color-accent)] text-white' : 'bg-white/5 text-white hover:bg-[var(--color-accent)]/20'}`}
                        data-animation="fadeInUp"
                        data-delay={idx * 50}
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <link.Icon size={20} className="text-white" />
                        </div>
                        <span className="type-body font-medium">{link.title}</span>
                      </Link>
                    );
                  })}
                </div>

                <Link 
                  href="/services" 
                  className="w-full bg-[var(--color-accent)] text-white py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 font-semibold scroll-reveal"
                  data-animation="fadeInUp"
                >
                  <span className="scroll-reveal" data-animation="fadeInUp">View All Service</span>
                  <FaArrowAltCircleRight className="scroll-reveal" data-animation="fadeInUp" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <WorkingProcessSection />

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fadeIn">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50"
          >
            <FaTimes size={32} />
          </button>
          
          <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative z-10" onClick={(e) => e.stopPropagation()}>
            <iframe 
              width="100%" 
              height="100%" 
              src={`${service.video_url}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

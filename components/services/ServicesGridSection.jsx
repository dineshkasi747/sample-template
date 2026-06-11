'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaHeartPulse, FaMicroscope, FaFlask, FaChildReaching, FaHeartCircleBolt, FaBrain } from 'react-icons/fa6';
import { FaCheckCircle, FaArrowAltCircleRight } from 'react-icons/fa';

export default function ServicesGridSection() {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      id: "cardiology",
      Icon: FaHeartPulse,
      title: "Cardiology Clinic",
      description: "Expert consultations with board-certified cardiologists to assess heart health, discuss symptoms, and develop personalized treatment.",
      checklist: ["Cardiac Electrophysiology", "Cardiac Catheterization", "Arrhythmia Management"],
      link: "/services/cardiology-clinic",
      delay: 100
    },
    {
      id: "pathology",
      Icon: FaMicroscope,
      title: "Pathology Clinic",
      description: "Comprehensive tests to analyze body fluids, aiding in the diagnosis and monitoring of organ function and metabolic disorders.",
      checklist: ["Molecular Pathology", "Cytogenetics", "Immunology"],
      link: "/services/pathology-clinic",
      delay: 200
    },
    {
      id: "laboratory",
      Icon: FaFlask,
      title: "Laboratory Analysis",
      description: "Our Laboratory Analysis Services offer a comprehensive range of advanced tests to aid in the accurate diagnosis and metabolic disorders.",
      checklist: ["Comprehensive Test Menu", "Timely Turnaround", "Advanced Diagnostic Tests"],
      link: "/services/laboratory-analysis",
      delay: 300
    },
    {
      id: "pediatric",
      Icon: FaChildReaching,
      title: "Pediatric Clinic",
      description: "Comprehensive well-child checkups, growth monitoring, and developmental assessments to ensure your child's health track.",
      checklist: ["Nutrition Counseling", "Pediatric Dermatology", "Developmental Evaluations"],
      link: "/services/pediatric-clinic",
      delay: 400
    },
    {
      id: "cardiac",
      Icon: FaHeartCircleBolt,
      title: "Cardiac Clinic",
      description: "Find comprehensive care and support for heart failure patients, including lifestyle recommendations and advanced therapies.",
      checklist: ["Heart Failure Program", "Cardiac Rehabilitation", "Lipid Management"],
      link: "/services/cardiac-clinic",
      delay: 500
    },
    {
      id: "neurology",
      Icon: FaBrain,
      title: "Neurology Clinic",
      description: "Consultations with specialized neurologists to address various neurological concerns, symptoms, and disorders.",
      checklist: ["Epilepsy Management", "Headache and Migraine Clinic", "Neurological Examinations"],
      link: "/services/neurology-clinic",
      delay: 600
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
            <span className="scroll-reveal" data-animation="fadeInUp">Our Services</span>
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="200">
            <SplitText text="Providing Medical Care For The Sickest In Our Community." />
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[var(--color-primary)] p-10 flex flex-col h-full scroll-reveal card-hover-lift group"
              data-animation="fadeInUp"
              data-delay={service.delay}
            >
              
              <div className="mb-6 scroll-reveal" data-animation="fadeInUp">
                <service.Icon size={56} className="text-white scroll-reveal stroke-[0.5]" data-animation="fadeInUp" />
              </div>

              <h3 className="type-h3 text-2xl text-white mb-6 scroll-reveal" data-animation="fadeInUp">
                <span className="scroll-reveal" data-animation="fadeInUp">{service.title}</span>
              </h3>
              
              <p className="type-body text-white/70 mb-8 scroll-reveal" data-animation="fadeInUp">
                <span className="scroll-reveal" data-animation="fadeInUp">{service.description}</span>
              </p>

              <ul className="space-y-4 mb-10 flex-grow scroll-reveal" data-animation="fadeInUp">
                {service.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center text-white/90 font-medium scroll-reveal" data-animation="fadeInUp">
                    <FaCheckCircle className="text-[var(--color-accent)] mr-3 flex-shrink-0 scroll-reveal" data-animation="fadeInUp" />
                    <span className="scroll-reveal" data-animation="fadeInUp">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto scroll-reveal" data-animation="fadeInUp">
                <Link href={service.link} className="inline-flex items-center text-[var(--color-accent)] font-semibold border border-[var(--color-accent)] rounded-full px-6 py-2.5 hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300 scroll-reveal" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">Read More</span>
                  <FaArrowAltCircleRight className="ml-2 scroll-reveal" data-animation="fadeInUp" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaHeartPulse, FaBone, FaBaby, FaUserDoctor, FaPills, FaFileMedical, FaEarDeaf } from 'react-icons/fa6';
import { FaCheckCircle, FaArrowAltCircleRight } from 'react-icons/fa';

export default function ServicesGridSection() {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      id: "cardiology",
      Icon: FaHeartPulse,
      title: "Cardiology",
      description: "Comprehensive evaluation and management of common cardiovascular conditions, supported by ECG, echocardiography, and evidence-based treatment protocols.",
      checklist: ["ECG & Echocardiogram", "Hypertension Management", "Coronary Artery Disease Care"],
      link: "/services/cardiology",
      delay: 100
    },
    {
      id: "orthopedics",
      Icon: FaBone,
      title: "Orthopedic Clinic",
      description: "Specialized bone and joint treatments covering Total Hip and Knee Replacements, ACL reconstructions, and spine surgeries.",
      checklist: ["Total Hip Replacement", "Total Knee Replacement", "Spine Laminectomy & Discectomy"],
      link: "/services/orthopedic-clinic",
      delay: 200
    },
    {
      id: "general-medicine",
      Icon: FaUserDoctor,
      title: "General Medicine",
      description: "Primary clinical care and preventative medicine, managing lifestyle conditions like diabetes, hypertension, metabolic disorders, and thyroid issues.",
      checklist: ["Chronic Care Management", "Preventative Checkups", "Hypertension, Diabetes & Thyroid"],
      link: "/services/general-medicine",
      delay: 400
    },
    {
      id: "pharmacy-emergency",
      Icon: FaPills,
      title: "24/7 Pharmacy & Emergency",
      description: "Round-the-clock emergency services with dedicated trauma units, immediate critical care, and a fully stocked 24/7 in-house pharmacy.",
      checklist: ["24/7 Emergency Ward", "X-Ray & Emergency Diagnostics", "Round-the-clock Pharmacy"],
      link: "/services/pharmacy-emergency",
      delay: 500
    },
    {
      id: "health-insurance",
      Icon: FaFileMedical,
      title: "Health Insurance Policies",
      description: "Streamlined cashless hospitalization services, supporting all major TPAs including FHPL, Mediassist, Vidal (Steel Plant policies), and Future Generali.",
      checklist: ["Cashless Treatment Desk", "FHPL & Mediassist Panel", "Vidal (Steel Plant) Partner"],
      link: "/services/health-insurance-policies",
      delay: 600
    },
    {
      id: "ent",
      Icon: FaEarDeaf,
      title: "ENT (Ear, Nose & Throat)",
      description: "Specialist care for hearing loss, sinusitis, tonsillitis, nasal polyps, voice disorders, and vertigo by experienced ENT surgeons.",
      checklist: ["Sinusitis & Nasal Polyps", "Tonsillectomy", "Hearing Loss Treatment"],
      link: "/services/ent",
      delay: 700
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

'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaCalendarAlt, FaStethoscope, FaCapsules, FaLaptopMedical, FaHeartbeat, FaXRay } from 'react-icons/fa';

export default function AppointmentStepsSection() {
  const sectionRef = useScrollAnimation();

  const steps = [
    { icon: FaLaptopMedical, title: "Book An Appointment", desc: "Easily schedule a slot via call or WhatsApp.", num: "01" },
    { icon: FaStethoscope, title: "Conduct Checkup", desc: "Consult with our specialist doctors.", num: "02" },
    { icon: FaHeartbeat, title: "Perform Treatment", desc: "Receive immediate and customized care.", num: "03" },
    { icon: FaCapsules, title: "Prescribe & Pharmacy", desc: "Get prescriptions and meds from Sai Store.", num: "04" },
    { icon: FaXRay, title: "X-Ray", desc: "Fast digital X-ray imaging available on-site for accurate diagnosis.", num: "05" }
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-[var(--color-surface)] relative">
      
      {/* Decorative patterns */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal" data-animation="fadeInUp">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-reveal" data-animation="fadeInUp">
          
          {/* Left CTA Card (Col span 4) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0E2E50] to-[#06182C] p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-white/5 scroll-reveal" data-animation="fadeInUp">
            {/* Glowing bubble */}
            <div className="absolute -right-12 -top-12 w-36 h-36 bg-red-600/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-red-500 border border-white/10 scroll-reveal" data-animation="fadeInUp">
                <FaCalendarAlt size={26} className="scroll-reveal" data-animation="fadeInUp" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 scroll-reveal leading-tight" data-animation="fadeInUp">
                Open For Appointments
              </h3>
              <p className="text-white/70 mb-8 text-sm leading-relaxed scroll-reveal" data-animation="fadeInUp">
                We are now accepting online booking requests and direct walk-ins to serve you better. Contact our desk to schedule your doctor consultation.
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white w-full py-4 rounded-xl hover:bg-white hover:text-[var(--color-primary)] hover:scale-105 transition-all duration-300 font-bold scroll-reveal shadow-lg shadow-red-500/20" 
                data-animation="fadeInUp"
              >
                <FaCalendarAlt className="mr-2" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>

          {/* Right Content (Col span 8) */}
          <div className="lg:col-span-8 lg:pl-6 scroll-reveal" data-animation="fadeInUp">
            <div className="mb-12 scroll-reveal" data-animation="fadeInUp">
              <span className="type-label text-red-600 font-bold tracking-widest scroll-reveal" data-animation="fadeInUp">
                How We Work
              </span>
              <h2 className="type-h2 text-[var(--color-primary)] font-extrabold mt-4 mb-6 scroll-reveal leading-tight" data-animation="fadeInUp">
                <SplitText text="A Seamless Process For Your Healthcare." />
              </h2>
              <p className="type-body text-gray-600 max-w-2xl scroll-reveal text-base leading-relaxed" data-animation="fadeInUp">
                From your initial appointment booking to consults, diagnostic checkups, treatments, and prescriptions, Sree Pavan Sai Hospital keeps the process clean, quick, and hassle-free.
              </p>
            </div>

            {/* Structured step list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 scroll-reveal" data-animation="fadeInUp">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:border-red-500/20 group scroll-reveal animate-fadeInUp"
                  data-animation="fadeInUp"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Huge outline background step number */}
                  <div className="absolute right-4 top-4 text-5xl font-extrabold text-[var(--color-primary)]/5 select-none transition-colors duration-300 group-hover:text-red-600/10">
                    {step.num}
                  </div>

                  <div className="w-14 h-14 bg-[var(--color-surface)] rounded-xl flex items-center justify-center text-[var(--color-primary)] flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-inner">
                    <step.icon size={22} />
                  </div>
                  
                  <div className="relative z-10 pr-6">
                    <h4 className="text-lg font-bold text-[var(--color-primary)] mb-1.5 transition-colors duration-300 group-hover:text-red-700">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

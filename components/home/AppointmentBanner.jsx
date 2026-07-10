'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaPhoneAlt, FaWhatsapp, FaHospitalAlt, FaEnvelope } from 'react-icons/fa';

export default function AppointmentBanner() {
  const sectionRef = useScrollAnimation();

  const contacts = [
    { 
      number: "9515236524 / 0891 2585858", 
      label: "24/7 Emergency Helpline", 
      bg: "bg-red-600 hover:bg-red-700 hover:shadow-red-600/30", 
      href: "tel:+919515236524" 
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-[#0b1c31] py-16 overflow-hidden border-y border-white/5">
      
      {/* Background visual accents */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal" data-animation="fadeInUp">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Call description */}
          <div className="lg:col-span-5 text-white space-y-4 scroll-reveal" data-animation="fadeInUp">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm block">
              Direct Contact Center
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white scroll-reveal" data-animation="fadeInUp">
              Need Emergency Medical Assistance? <br/>Contact Us 24/7
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md scroll-reveal" data-animation="fadeInUp">
              Our dedicated front office staff and emergency support team is available 24/7 to assist with appointments, emergency services, and patient enquiries. Click the contact card below to connect with us immediately.
            </p>
          </div>

          {/* Right Side: Quick dialing card grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4 w-full scroll-reveal" data-animation="fadeInUp" style={{ animationDelay: '200ms' }}>
            {contacts.map((contact, idx) => (
              <a 
                key={idx} 
                href={contact.href}
                className={`flex flex-col justify-between p-6 rounded-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${contact.bg} group border border-white/5 md:col-span-2 lg:col-span-2`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div className="text-[10px] text-white/70 uppercase font-bold tracking-wider mb-1">
                    {contact.label}
                  </div>
                  <div className="text-xl font-black tracking-wide whitespace-pre-line">
                    {contact.number}
                  </div>
                </div>
                <div className="mt-6 text-xs font-semibold flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  <span>Call Now</span>
                  <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

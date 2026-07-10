'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaCheckCircle, FaArrowCircleRight, FaHospital, FaUserMd, FaWallet, FaPrescriptionBottleAlt } from 'react-icons/fa';

export default function AboutSection() {
  const sectionRef = useScrollAnimation();

  const details = [
    { text: '24-Hour Emergency Care', icon: FaHospital, desc: 'Emergency care available 24/7' },
    { text: 'Experienced Medical Team', icon: FaUserMd, desc: 'Experienced Specialist & Superspecialist doctors on duty' },
    { text: 'Affordable Treatments', icon: FaWallet, desc: 'Transparent and affordable pricing' },
    { text: 'In-House Pharmacy & Laboratory', icon: FaPrescriptionBottleAlt, desc: '24/7 in-house pharmacy and diagnostic laboratory services' }
  ];

  return (
    <section ref={sectionRef} className="py-28 overflow-hidden bg-white relative">
      
      {/* Decorative background vectors */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute left-10 bottom-10 w-[500px] h-[500px] bg-red-50/20 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Image & Custom Borders */}
          <div className="lg:col-span-6 relative w-full flex justify-center py-6">
            {/* Outline shape */}
            <div className="absolute -left-2 -top-2 w-[85%] h-[90%] border-4 border-dashed border-red-500/20 rounded-2xl pointer-events-none z-0 hidden sm:block"></div>
            
            <div className="relative z-10 w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white scroll-reveal" data-animation="paperReveal">
              <img src="/images/JPG/sri-pavansai.png" alt="SRI Pavan Sai Hospital" className="w-full h-auto object-cover" />
            </div>
            
            {/* Red Gradient Badge 1 */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-4 rounded-2xl shadow-2xl font-bold text-lg flex items-center gap-3 z-20 scroll-reveal" data-animation="fadeInUp" data-delay="300">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
              </span>
              <span>Open 24 Hours</span>
            </div>

            {/* Glassmorphic Badge 2 */}
            <div className="absolute top-8 left-[-16px] bg-white/80 backdrop-blur-md border border-gray-100 px-5 py-2.5 rounded-full shadow-lg font-semibold text-sm text-[var(--color-primary)] flex items-center gap-2 z-20 scroll-reveal" data-animation="fadeInDown" data-delay="600">
              <FaHospital className="text-red-600" />
              <span>Sriharipuram, AP</span>
            </div>
          </div>

          {/* Right Column - Text & Custom Checklist Cards */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="type-label text-red-600 font-bold tracking-wider scroll-reveal" data-animation="fadeInUp">
                About SRI Pavan Sai Hospital
              </span>
              
              <h2 className="type-h2 text-[var(--color-primary)] font-extrabold scroll-reveal leading-tight" data-animation="fadeInUp" data-delay="200">
                Your Health, Our Priority – <span className="text-red-600">Always.</span>
              </h2>
              
              <p className="type-body text-gray-600 scroll-reveal text-lg leading-relaxed" data-animation="fadeInUp" data-delay="400">
                Sri Pavan Sai Hospital is a trusted 24-hour healthcare facility located in Sriharipuram. We are committed to delivering compassionate, affordable, and high-quality healthcare services through experienced doctors, dedicated healthcare professionals, advanced diagnostic facilities, and state-of-the-art medical infrastructure. Our mission is to provide safe, patient-centered, and evidence-based care 24 hours a day, 7 days a week.
              </p>
            </div>
            
            {/* Replaced standard list with modern styled cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 scroll-reveal" data-animation="fadeInUp" data-delay="600">
              {details.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-blue-50/40 hover:bg-[#EFF6FF] border border-blue-100/50 p-4 rounded-xl flex items-start gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-red-600 shadow-sm flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] text-sm">{item.text}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 scroll-reveal" data-animation="fadeInUp" data-delay="800">
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-full hover:bg-[var(--color-accent)] hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold group"
              >
                <span>Learn More About Us</span>
                <FaArrowCircleRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

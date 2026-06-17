'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';

export default function ContactSection() {
  const sectionRef = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will get back to you shortly.');
  };

  return (
    <section ref={sectionRef} className="py-28 bg-[var(--color-background)] relative">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="type-label text-red-600 font-bold tracking-widest scroll-reveal" data-animation="fadeInUp">
            Get In Touch
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] font-extrabold mt-4 scroll-reveal" data-animation="fadeInUp">
            <SplitText text="Contact Our Medical Desk." />
          </h2>
        </div>

        {/* Contact Container with rich styling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-3xl overflow-hidden border border-gray-150/50 scroll-reveal" data-animation="fadeInUp">
          
          {/* Left Side - Info Card (Col span 5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0E2E50] via-[#081E35] to-[#041221] text-white p-12 relative overflow-hidden flex flex-col justify-between">
            {/* Glowing background blob */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 my-auto">
              <h3 className="text-3xl font-extrabold mb-6 leading-snug scroll-reveal" data-animation="fadeInUp">
                Request an Appointment & Prioritize Your Health
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-10 scroll-reveal" data-animation="fadeInUp">
                Fill out our contact form, and our front desk operators will confirm your scheduling details. For immediate assistance or ambulance calls, use the floating call buttons.
              </p>
              
              <div className="w-full flex justify-center mt-6 scroll-reveal" data-animation="fadeLeftUp">
                <img 
                  src="/images/PNG/contact-us-img.png" 
                  alt="Contact Illustration" 
                  className="w-3/4 object-contain filter drop-shadow-2xl transition-transform duration-700 hover:scale-105" 
                />
              </div>
            </div>
          </div>

          {/* Right Side - Form (Col span 7) */}
          <div className="lg:col-span-7 bg-white p-12 lg:p-16 flex items-center">
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="scroll-reveal" data-animation="fadeInUp">
                  <label className="block text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter Name" 
                    required 
                    className="w-full bg-[var(--color-background)] border-2 border-transparent focus:border-red-500/30 focus:bg-white rounded-xl px-5 py-4 outline-none transition-all duration-300 shadow-inner text-gray-700 text-sm" 
                  />
                </div>
                
                <div className="scroll-reveal" data-animation="fadeInUp">
                  <label className="block text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter Email" 
                    required 
                    className="w-full bg-[var(--color-background)] border-2 border-transparent focus:border-red-500/30 focus:bg-white rounded-xl px-5 py-4 outline-none transition-all duration-300 shadow-inner text-gray-700 text-sm" 
                  />
                </div>
                
                <div className="scroll-reveal" data-animation="fadeInUp">
                  <label className="block text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter Phone" 
                    required 
                    className="w-full bg-[var(--color-background)] border-2 border-transparent focus:border-red-500/30 focus:bg-white rounded-xl px-5 py-4 outline-none transition-all duration-300 shadow-inner text-gray-700 text-sm" 
                  />
                </div>
                
                <div className="scroll-reveal" data-animation="fadeInUp">
                  <label className="block text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    required 
                    className="w-full bg-[var(--color-background)] border-2 border-transparent focus:border-red-500/30 focus:bg-white rounded-xl px-5 py-4 outline-none transition-all duration-300 shadow-inner text-gray-500 text-sm" 
                  />
                </div>
                
              </div>
              
              <div className="scroll-reveal" data-animation="fadeInUp">
                <label className="block text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-2">Detailed Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  required 
                  className="w-full bg-[var(--color-background)] border-2 border-transparent focus:border-red-500/30 focus:bg-white rounded-xl px-5 py-4 outline-none transition-all duration-300 shadow-inner text-gray-700 text-sm resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-xl hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.02] transition-all duration-300 font-bold w-full sm:w-auto mt-4 scroll-reveal shadow-md" 
                data-animation="fadeInUp"
              >
                Send Request
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

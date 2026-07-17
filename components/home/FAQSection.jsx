'use client';

import { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function FAQSection() {
  const sectionRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: "Are consulting doctors available 24/7?", answer: "Yes, our general practitioners and emergency medical officers are available 24/7. Specialists can also be reached on call for emergencies." },
    { question: "Do you accept cashless health insurance policies?", answer: "Yes, we accept FHPL, Mediassist, Vidal (Steel Plant panel), Future Generali, Ericson, and other leading TPAs. Please present your insurance card at our desk." },
    { question: "Where is the hospital located and is there parking?", answer: "We are located at Opposite Swamy Vivekananda School, Main Road Jawaharlal Nagar, Sriharipuram, Visakhapatnam. Parking space is available for cars and two-wheelers." }
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-white overflow-hidden relative">
      
      {/* Decorative dots or circles */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-red-50/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal" data-animation="fadeInUp">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content - Image (Col span 5) */}
          <div className="lg:col-span-5 relative scroll-reveal" data-animation="fadeInUp">
            {/* Outline highlight */}
            <div className="absolute -left-3 -top-3 w-full h-full border-2 border-red-600/10 rounded-2xl pointer-events-none z-0"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl scroll-reveal" data-animation="paperReveal">
              <img src="/images/JPG/main-pavansai.png" alt="FAQ" className="w-full h-auto object-cover" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl flex gap-6 z-20 border border-gray-100 scroll-reveal" data-animation="fadeInUp" data-delay="300">
              <div className="text-center scroll-reveal" data-animation="fadeInUp">
                <div className="text-3xl font-black text-red-600 scroll-reveal" data-animation="fadeInUp">24/7</div>
                <div className="text-[10px] font-bold text-[var(--color-primary)]/60 mt-1 uppercase tracking-wider scroll-reveal" data-animation="fadeInUp">Emergency Care</div>
              </div>
              <div className="w-px bg-gray-200 scroll-reveal" data-animation="fadeInUp"></div>
              <div className="text-center scroll-reveal" data-animation="fadeInUp">
                <div className="text-xl sm:text-2xl font-black text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">Sri Pavan Sai Pharmacy</div>
                <div className="text-[10px] font-bold text-[var(--color-primary)]/60 mt-1 uppercase tracking-wider scroll-reveal" data-animation="fadeInUp">24/7 Pharmacy</div>
              </div>
            </div>
          </div>

          {/* Right Content - Accordion (Col span 7) */}
          <div className="lg:col-span-7 lg:pl-6 mt-12 lg:mt-0 scroll-reveal" data-animation="fadeInUp">
            <span className="type-label text-red-600 font-bold tracking-widest scroll-reveal" data-animation="fadeInUp">
              FAQs
            </span>
            <h2 className="type-h2 text-[var(--color-primary)] font-extrabold mt-4 mb-10 scroll-reveal leading-tight" data-animation="fadeInUp">
              <SplitText text="Consultations with Qualified doctors." />
            </h2>
            
            <div className="space-y-4 scroll-reveal" data-animation="fadeInUp">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index}
                    className={`border border-gray-150 rounded-2xl overflow-hidden transition-all duration-300 scroll-reveal ${isOpen ? 'shadow-lg border-red-500/20 bg-blue-50/10' : 'bg-white hover:bg-gray-50'}`}
                    data-animation="fadeInUp"
                  >
                    <button 
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className={`w-full text-left px-6 py-5 flex items-center justify-between font-bold text-lg transition-all duration-300 scroll-reveal ${isOpen ? 'text-red-700 bg-red-50/20 border-l-4 border-red-600 pl-5' : 'text-[var(--color-primary)] bg-white border-l-4 border-transparent'}`}
                      data-animation="fadeInUp"
                    >
                      <span className="scroll-reveal pr-4 text-base sm:text-lg font-bold" data-animation="fadeInUp">{faq.question}</span>
                      <span className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-all duration-300 scroll-reveal ${isOpen ? 'bg-red-600 text-white rotate-180' : 'bg-[var(--color-surface)] text-[var(--color-primary)]'}`} data-animation="fadeInUp">
                        {isOpen ? <FaMinus size={12} className="scroll-reveal" data-animation="fadeInUp" /> : <FaPlus size={12} className="scroll-reveal" data-animation="fadeInUp" />}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-350 ease-in-out scroll-reveal ${isOpen ? 'max-h-[300px] opacity-100 visible border-t border-gray-150/40' : 'max-h-0 opacity-0 invisible'}`}
                      data-animation="fadeInUp"
                    >
                      <div className="p-6 text-gray-600 text-sm leading-relaxed scroll-reveal" data-animation="fadeInUp">
                        <span className="scroll-reveal" data-animation="fadeInUp">{faq.answer}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

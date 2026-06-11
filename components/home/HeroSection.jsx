'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaArrowCircleRight, FaPlayCircle } from 'react-icons/fa';

export default function HeroSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="relative bg-[var(--color-primary)] py-20 lg:py-32 overflow-hidden z-0">
      
      {/* Background shape in bottom right */}
      <img src="/images/PNG/half-shape.png" alt="" className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-1/3 z-[-1] scroll-reveal" data-animation="fadeInUp" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6">
            <span className="type-label text-white inline-block scroll-reveal tracking-[0.2em] uppercase text-sm font-bold" data-animation="fadeInUp" data-delay="100">
              WE TACK CARE OF YOUR HEALTH
            </span>
            
            <h1 className="type-h1 text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="400">
              <SplitText text="We Are Providing Best & Affordable Health Care." />
            </h1>
            
            <p className="type-body text-white/70 max-w-lg scroll-reveal" data-animation="fadeInUp" data-delay="700">
              Our is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link href="/about" className="scroll-reveal inline-flex items-center justify-center border border-[var(--color-accent)] bg-transparent text-white px-8 py-3 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 font-semibold group" data-animation="fadeInUp" data-delay="1000">
                <span className="scroll-reveal" data-animation="fadeInUp" data-delay="1100">Read More</span>
                <FaArrowCircleRight className="scroll-reveal ml-2 text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors" data-animation="fadeInUp" data-delay="1200" />
              </Link>
              
              <button className="scroll-reveal inline-flex items-center text-white hover:text-[var(--color-accent)] transition-all duration-300 font-semibold" data-animation="fadeInUp" data-delay="1300">
                <FaPlayCircle size={32} className="scroll-reveal mr-3" data-animation="fadeInUp" data-delay="1400" />
                <span className="scroll-reveal" data-animation="fadeInUp" data-delay="1500">Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[650px] h-[555px] flex justify-evenly items-end p-2.5 mx-auto" 
            style={{
              backgroundImage: "url('/images/PNG/white-dots-img.png')",
              backgroundPosition: "50% 50%",
              backgroundSize: "65%",
              backgroundRepeat: "no-repeat"
            }}
          >
            {/* Bottom-left image (Female doctor) */}
            <div className="relative group w-[250px] h-[425px] rounded-full overflow-hidden shadow-2xl self-end scroll-reveal flex-shrink-0" data-animation="paperReveal">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 rounded-full"></div>
              <div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-[25deg] -left-[100%] group-hover:left-[150%] transition-all duration-[1200ms] ease-in-out z-20 pointer-events-none opacity-0 group-hover:opacity-100 delay-100"></div>
              <img src="/images/JPG/hero-img-1.jpg" alt="Doctor" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            
            {/* Top-right image (Two doctors) */}
            <div className="relative group w-[250px] h-[425px] rounded-full overflow-hidden shadow-2xl self-start scroll-reveal flex-shrink-0" data-animation="paperReveal" style={{ animationDelay: '600ms' }}>
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 rounded-full"></div>
              <div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-[25deg] -left-[100%] group-hover:left-[150%] transition-all duration-[1200ms] ease-in-out z-20 pointer-events-none opacity-0 group-hover:opacity-100 delay-100"></div>
              <img src="/images/JPG/hero-img-2.jpg" alt="Doctors" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

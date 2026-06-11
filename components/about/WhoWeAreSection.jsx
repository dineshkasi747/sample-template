'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaPlayCircle } from 'react-icons/fa';

export default function WhoWeAreSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Image */}
          <div className="relative scroll-reveal" data-animation="slideInLeft">
            <div className="rounded-2xl overflow-hidden shadow-2xl scroll-reveal" data-animation="paperReveal">
              <img src="/about/JPG/improving-img.jpg" alt="Who We Are" className="w-full h-auto object-cover scroll-reveal" data-animation="paperReveal" />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-6">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
              <span className="scroll-reveal" data-animation="fadeInUp">Who We Are</span>
            </span>
            
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="300">
              <SplitText text="Improving The Quality Of Your Life Through Better Health." />
            </h2>
            
            <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="500">
              <span className="scroll-reveal" data-animation="fadeInUp">
                We offer a wide range of comprehensive healthcare services to address all aspects of your health. From preventive care and health screenings to specialized treatments and chronic disease management.
              </span>
            </p>
            
            <div className="pt-6 scroll-reveal" data-animation="fadeInUp" data-delay="700">
              <button 
                onClick={() => window.open('https://www.youtube.com/embed/VhBl3dHT5SY', '_blank')}
                className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-all duration-300 font-semibold text-lg scroll-reveal group" 
                data-animation="fadeInUp"
              >
                <FaPlayCircle size={48} className="mr-4 text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors scroll-reveal" data-animation="fadeInUp" />
                <span className="scroll-reveal" data-animation="fadeInUp">Play Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

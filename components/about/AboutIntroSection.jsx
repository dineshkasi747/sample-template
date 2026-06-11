'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';

export default function AboutIntroSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
              <span className="scroll-reveal" data-animation="fadeInUp">About Us</span>
            </span>
            
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="200">
              <SplitText text="Caring For The Health & Well Being Of Family." />
            </h2>
            
            <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="400">
              <span className="scroll-reveal" data-animation="fadeInUp">
                Our family-centered approach to healthcare ensures that each member of your family receives personalized attention and care tailored to their unique needs. We believe in building strong relationships with our patients, fostering trust.
              </span>
            </p>
            
            {/* Doctor Card */}
            <div className="flex items-center space-x-6 pt-6 mt-6 border-t border-gray-100 scroll-reveal" data-animation="fadeInUp" data-delay="600">
              <img src="/about/JPG/about-footer-img.jpg" alt="Dr. Elizabeth Foster" className="w-[60px] h-[60px] rounded-full object-cover scroll-reveal" data-animation="fadeInUp" data-delay="700" />
              <div className="flex flex-col">
                <img src="/about/PNG/signature.png" alt="Signature" className="w-[114px] h-[36px] object-contain mb-2 scroll-reveal" data-animation="fadeInUp" data-delay="800" />
                <h4 className="font-bold text-[var(--color-primary)] text-lg scroll-reveal" data-animation="fadeInUp" data-delay="900">
                  <span className="scroll-reveal" data-animation="fadeInUp">Dr. Elizabeth Foster</span>
                </h4>
                <span className="text-[var(--color-accent)] font-semibold text-sm scroll-reveal" data-animation="fadeInUp" data-delay="1000">
                  <span className="scroll-reveal" data-animation="fadeInUp">Family Physician</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Collage */}
          <div className="relative h-[500px] w-full flex justify-center lg:justify-end gap-6">
            <img src="/about/PNG/half-circle-img.png" alt="Decorative" className="absolute top-1/2 left-0 -translate-y-1/2 opacity-20 pointer-events-none w-1/2 scroll-reveal z-0" data-animation="fadeInUp" />
            
            <div className="w-[250px] h-[370px] rounded-full overflow-hidden shadow-2xl border-[6px] border-white relative z-10 self-end scroll-reveal" data-animation="slideInLeft">
              <img src="/about/JPG/page-about-us-img-1.jpg" alt="About" className="w-full h-full object-cover scroll-reveal" data-animation="paperReveal" />
            </div>
            
            <div className="w-[250px] h-[375px] rounded-full overflow-hidden shadow-2xl border-[6px] border-white relative z-10 self-start scroll-reveal" data-animation="slideInLeft" data-delay="150">
              <img src="/about/JPG/page-about-us-img-2.jpg" alt="About" className="w-full h-full object-cover scroll-reveal" data-animation="paperReveal" data-delay="150" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

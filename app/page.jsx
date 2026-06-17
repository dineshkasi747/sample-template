import HeroSection from '@/components/home/HeroSection';
import AppointmentBanner from '@/components/home/AppointmentBanner';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import AppointmentStepsSection from '@/components/home/AppointmentStepsSection';
import FAQSection from '@/components/home/FAQSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AppointmentBanner />
      <AboutSection />
      <ServicesSection />
      <AppointmentStepsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

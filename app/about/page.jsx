import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutPageHero from '@/components/about/AboutPageHero';
import AboutIntroSection from '@/components/about/AboutIntroSection';
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import TopServicesSection from '@/components/about/TopServicesSection';
import FamilyCareSection from '@/components/about/FamilyCareSection';
import AppointmentBannerAbout from '@/components/about/AppointmentBannerAbout';
import OurDoctorsSection from '@/components/about/OurDoctorsSection';
import TestimonialsAboutSection from '@/components/about/TestimonialsAboutSection';
import BlogAboutSection from '@/components/about/BlogAboutSection';

export const metadata = {
  title: 'About Us - MediPro',
  description: 'Learn more about MediPro and our dedicated healthcare professionals.',
};

export default function AboutPage() {
  return (
    <>
      <AboutPageHero />
      <AboutIntroSection />
      <WhoWeAreSection />
      <TopServicesSection />
      <FamilyCareSection />
      <AppointmentBannerAbout />
      <OurDoctorsSection />
      <TestimonialsAboutSection />
      <BlogAboutSection />
    </>
  );
}

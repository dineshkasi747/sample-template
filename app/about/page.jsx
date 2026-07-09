import AboutPageHero from '@/components/about/AboutPageHero';
import AboutIntroSection from '@/components/about/AboutIntroSection';
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import TopServicesSection from '@/components/about/TopServicesSection';
import FamilyCareSection from '@/components/about/FamilyCareSection';
import AppointmentBannerAbout from '@/components/about/AppointmentBannerAbout';

export const metadata = {
  title: 'About Us - SRI Pavan Sai Hospital | 24 Hours Healthcare in Sriharipuram',
  description: 'SRI Pavan Sai Hospital is a trusted 24-hour healthcare facility in Sriharipuram. We offer OPD consultation, diagnostic tests, pharmacy, nebulization, health checkups, and emergency care. Call 9515236524.',
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
    </>
  );
}

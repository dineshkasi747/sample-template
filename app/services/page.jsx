import ServicesPageHero from '@/components/services/ServicesPageHero';
import ServicesGridSection from '@/components/services/ServicesGridSection';
import TopServiceSection from '@/components/services/TopServiceSection';
import OurCultureSection from '@/components/services/OurCultureSection';

export const metadata = {
  title: 'Services - Pavan Sai Hospital',
  description: 'Providing Medical Care For The Sickest In Our Community.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageHero />
      <ServicesGridSection />
      <TopServiceSection />
      <OurCultureSection />
    </>
  );
}

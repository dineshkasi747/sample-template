import ServicesPageHero from '@/components/services/ServicesPageHero';
import ServicesGridSection from '@/components/services/ServicesGridSection';
import TopServiceSection from '@/components/services/TopServiceSection';
import OurCultureSection from '@/components/services/OurCultureSection';
import AppDownloadSection from '@/components/services/AppDownloadSection';

export const metadata = {
  title: 'Services - MediPro',
  description: 'Providing Medical Care For The Sickest In Our Community.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageHero />
      <ServicesGridSection />
      <TopServiceSection />
      <OurCultureSection />
      <AppDownloadSection />
    </>
  );
}

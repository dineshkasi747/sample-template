import { Figtree } from 'next/font/google';
import './globals.css';
import BootLoader from '@/components/shared/BootLoader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/shared/FloatingButtons';

const figtree = Figtree({ 
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata = {
  title: 'Pavan Sai Hospital - 24 Hours Healthcare in Visakhapatnam',
  description: 'Pavan Sai Hospital offers affordable 24-hour healthcare services in Sriharipuram, Visakhapatnam. OPD consultation, diagnostic labs, pharmacy, health checkups & emergency care. Call 9515236524.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <BootLoader />
        <Navbar />
        <main className="min-h-screen pt-[104px]">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

import { Figtree } from 'next/font/google';
import './globals.css';
import BootLoader from '@/components/shared/BootLoader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const figtree = Figtree({ 
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata = {
  title: 'MediPro - Medical Web Application',
  description: 'We Take Care Of Your Health. Providing Best & Affordable Health Care.',
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
      </body>
    </html>
  );
}

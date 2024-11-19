import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  fallback: ['sans-serif'],
});

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Hyperhire - 외국인 원격 채용',
  description: '외국인 원격 채용',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

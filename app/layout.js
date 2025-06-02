import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
import ScrollToTop from './components/helper/scroll-to-top';
import GTMClient from './components/helper/GTMClient'; // ✅ هذا الجديد dfg

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of taqieddine',
  description: 'This is the portfolio of taqieddine. I am a computer engeniring and a self taught developer...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        <GTMClient /> {/* ✅ فقط هنا داخل المكون Client */}
      </body>
    </html>
  );
}

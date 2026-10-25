import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Senja Coffee — Kopi baik, hari yang baik',
  description: 'Kedai kopi kecil untuk jeda yang terasa berarti. Temukan racikan favoritmu di Senja Coffee.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

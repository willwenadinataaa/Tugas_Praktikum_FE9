import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="brand footer-brand" href="/"><span className="brand-mark" aria-hidden="true">s.</span><span className="brand-name">senja<span>coffee</span></span></Link>
          <p>Kopi baik, hari yang baik.<br />Tempat singgah, tempat pulang.</p>
        </div>
        <div className="footer-column"><span className="eyebrow">JELAJAHI</span><Link href="/menu">Menu kami</Link><Link href="/about">Cerita kami</Link><Link href="/contact">Hubungi kami</Link></div>
        <div className="footer-column"><span className="eyebrow">KUNJUNGI</span><span>Jl. Cendana No. 18</span><span>Bandung, Jawa Barat</span><span>Setiap hari, 08.00—22.00</span></div>
        <div className="footer-column"><span className="eyebrow">IKUTI AROMANYA</span><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a><a href="mailto:halo@senjacoffee.id">halo@senjacoffee.id</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Senja Coffee. Dibuat dengan sepenuh hati.</span><span>Bandung, Indonesia · 6°54′ LS</span></div>
    </footer>
  );
}

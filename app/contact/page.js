import ContactForm from '../../components/ContactForm';

export const metadata = { title: 'Kontak & Lokasi — Senja Coffee' };

export default function ContactPage() {
  return (
    <div className="page-shell contact-page">
      <section className="page-intro contact-intro"><span className="eyebrow">PINTU KAMI SELALU TERBUKA</span><h1>Jangan sungkan<br /><em>menyapa.</em></h1><p>Mau tanya menu, pesan tempat, atau sekadar bilang halo? Kami senang mendengarnya.</p></section>
      <section className="contact-layout section-shell"><div className="contact-details"><span className="eyebrow">TEMUKAN KAMI</span><h2>Singgah sebentar,<br /><em>tinggal lebih lama.</em></h2><div className="detail-row"><span>ALAMAT</span><p>Jl. Cendana No. 18<br />Bandung, Jawa Barat 40115<br /><a href="https://maps.google.com/?q=Bandung" target="_blank" rel="noreferrer">Buka peta ↗</a></p></div><div className="detail-row"><span>JAM BUKA</span><p>Senin—Minggu<br />08.00—22.00 WIB</p></div><div className="detail-row"><span>SAPA KAMI</span><p><a href="mailto:halo@senjacoffee.id">halo@senjacoffee.id</a><br /><a href="tel:+622212345678">+62 22 1234 5678</a></p></div><div className="location-card"><span className="map-grid" /><span className="map-pin">✳</span><span className="map-label">SENJA COFFEE <small>6°54′ LS · BANDUNG</small></span></div></div><div className="contact-form-wrap"><span className="eyebrow">KIRIM PESAN</span><h2>Ada yang bisa<br />kami bantu?</h2><ContactForm /></div></section>
    </div>
  );
}

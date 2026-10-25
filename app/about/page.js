import Link from 'next/link';

export const metadata = { title: 'Cerita Kami — Senja Coffee' };

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-intro about-intro"><span className="eyebrow">SEBUAH CERITA KECIL</span><h1>Kami percaya<br />hari baik dimulai<br /><em>dengan jeda.</em></h1><p>Senja adalah ruang untuk memperlambat langkah. Selalu ada kopi hangat, kursi yang nyaman, dan waktu yang tidak mendesak.</p><span className="intro-index">CERITA / SEJAK 2021</span></section>
      <section className="about-feature section-shell"><div className="about-art"><span className="about-circle" /><span className="about-cup"><span>senja</span></span><span className="about-art-label">BANDUNG, INDONESIA<br />EST. 2021</span></div><div className="about-copy"><span className="eyebrow">DIMULAI DARI SEBUAH MEJA KECIL</span><h2>Tempat untuk<br /><em>merasa cukup.</em></h2><p>Awalnya hanya meja kecil di sudut kota dan dua orang yang suka kopi. Tapi kami selalu percaya, secangkir yang dibuat dengan baik bisa mengubah cara seseorang menjalani harinya.</p><p>Sekarang Senja tumbuh jadi rumah kecil bagi siapa saja yang ingin berhenti sebentar. Biji kopi kami datang dari petani lokal, disangrai perlahan, lalu diseduh dengan perhatian yang sama seperti hari pertama.</p><Link className="underlined-link" href="/menu">Coba racikan kami <span aria-hidden="true">↗</span></Link></div></section>
      <section className="values-section"><div className="section-shell"><span className="eyebrow">YANG SELALU KAMI JAGA</span><div className="values-grid"><article><span>01</span><h3>Asal yang jelas</h3><p>Kami bekerja dekat dengan petani dan roaster lokal. Biji yang baik berawal dari hubungan yang baik.</p></article><article><span>02</span><h3>Dibuat dengan sabar</h3><p>Tak ada jalan pintas untuk rasa yang seimbang. Setiap cangkir diracik sesuai pesanan.</p></article><article><span>03</span><h3>Ruang yang ramah</h3><p>Datang sendiri atau bersama teman. Kamu selalu punya tempat di meja kami.</p></article></div></div></section>
      <section className="about-end section-shell"><p>“Kopi yang baik membuat kita ingin tinggal sedikit lebih lama.”</p><span>— CATATAN KECIL DARI BAR SENJA</span></section>
    </div>
  );
}

import Link from 'next/link';
import DrinkCard from '../components/DrinkCard';
import { menuItems } from '../data/menu';

export default function HomePage() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-line" /> KOPI KECIL, JEDA BESAR</span>
          <h1>Pelan-pelan,<br />biar <em>terasa.</em></h1>
          <p className="hero-lede">Ada hari yang perlu dirayakan. Ada hari yang cukup ditemani secangkir kopi. Kami ada untuk keduanya.</p>
          <div className="hero-actions"><Link className="button button-dark" href="/menu">Temukan kopi favorit <span aria-hidden="true">↗</span></Link><Link className="quiet-link" href="/about">Kenalan dengan Senja <span aria-hidden="true">→</span></Link></div>
          <div className="hero-meta"><span>01 — 04</span><span className="meta-rule" /><span>DIRACIK DENGAN HATI DI BANDUNG</span></div>
        </div>
        <div className="hero-art" role="img" aria-label="Ilustrasi secangkir kopi Senja dengan warna hangat">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <span className="hero-stamp">GOOD<br />THINGS<br /><i>take time</i></span>
          <div className="hero-steam steam-one" /><div className="hero-steam steam-two" /><div className="hero-steam steam-three" />
          <div className="hero-mug"><span className="mug-rim" /><span className="mug-coffee" /><span className="mug-mark">senja<small>coffee</small></span><span className="mug-handle" /></div>
          <div className="hero-saucer" />
          <span className="hero-art-caption">HOUSE BLEND NO. 01 <span>·</span> 100% ARABIKA</span>
          <span className="hero-side-note">ROASTED SLOWLY / SERVED WARMLY</span>
        </div>
      </section>

      <section className="marquee-band" aria-label="Kopi baik, hari yang baik"><div>KOPI BAIK <span>✳</span> HARI YANG BAIK <span>✳</span> JEDA SEJENAK <span>✳</span> KOPI BAIK <span>✳</span> HARI YANG BAIK <span>✳</span> JEDA SEJENAK <span>✳</span></div></section>

      <section className="section-shell menu-preview">
        <div className="section-heading"><div><span className="eyebrow">DARI BAR KECIL KAMI</span><h2>Teman untuk<br /><em>setiap suasana.</em></h2></div><div className="heading-aside"><p>Setiap cangkir dimulai dari biji pilihan dan tangan yang sabar. Sisanya, biar harimu yang menentukan.</p><Link className="underlined-link" href="/menu">Lihat semua menu <span aria-hidden="true">↗</span></Link></div></div>
        <div className="drink-grid">{menuItems.slice(0, 3).map((item) => <DrinkCard key={item.slug} item={item} />)}</div>
      </section>

      <section className="story-teaser">
        <div className="story-art"><span className="story-sun" /><span className="story-plant plant-one" /><span className="story-plant plant-two" /><span className="story-window"><span>06:18</span><small>pagi yang tenang</small></span><span className="story-note">TEMPAT SINGGAH<br />SEJENAK.</span></div>
        <div className="story-copy"><span className="eyebrow">SEDIKIT TENTANG KAMI</span><h2>Lebih dari kopi.<br /><em>Ruang untuk bernapas.</em></h2><p>Senja lahir dari keinginan sederhana: bikin tempat yang tidak terburu-buru. Tempat untuk duduk sebentar, ngobrol lebih lama, atau menikmati hening ditemani kopi.</p><Link className="underlined-link" href="/about">Baca cerita kami <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="visit-banner section-shell"><div><span className="eyebrow">KURSI KECIL KAMI MENUNGGU</span><h2>Ketemu di <em>Senja?</em></h2></div><Link className="button button-cream" href="/contact">Lihat lokasi & jam buka <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}

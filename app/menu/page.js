import Link from 'next/link';
import DrinkCard from '../../components/DrinkCard';
import { menuItems } from '../../data/menu';

export const metadata = { title: 'Menu — Senja Coffee' };

export default function MenuPage() {
  return (
    <div className="page-shell">
      <section className="page-intro menu-intro"><span className="eyebrow">DIBUAT SATU PER SATU</span><h1>Menu yang<br /><em>menemani.</em></h1><p>Dari tegukan pertama sampai obrolan terakhir. Temukan racikan yang paling pas untuk harimu.</p><span className="intro-index">MENU / 01—04</span></section>
      <section className="menu-listing section-shell"><div className="menu-toolbar"><span>RACIKAN KAMI <i>({String(menuItems.length).padStart(2, '0')})</i></span><span>BAHAN PILIHAN · HARGA TERMASUK PAJAK</span></div><div className="drink-grid menu-grid">{menuItems.map((item) => <DrinkCard key={item.slug} item={item} />)}</div></section>
      <section className="menu-note"><span className="note-star">✳</span><p>Semua minuman bisa dibuat panas atau dingin. Punya pertanyaan soal susu atau tingkat manis? <Link href="/contact">Bilang saja pada barista kami.</Link></p></section>
    </div>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { menuItems } from '../../../data/menu';

export function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = menuItems.find((entry) => entry.slug === slug);
  return { title: item ? `${item.name} — Senja Coffee` : 'Menu — Senja Coffee' };
}

export default async function MenuDetailPage({ params }) {
  const { slug } = await params;
  const item = menuItems.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <div className="page-shell detail-page">
      <div className="detail-breadcrumb"><Link href="/menu">Menu</Link><span>/</span><span>{item.name}</span></div>
      <section className="detail-layout section-shell">
        <div className={`detail-visual drink-visual ${item.visual}`} aria-label={`Ilustrasi ${item.name}`} role="img"><span className="visual-sun" /><span className="visual-bean bean-one" /><span className="visual-bean bean-two" /><span className="cup-illustration"><span className="cup-foam" /><span className="cup-logo">s.</span></span><span className="cup-shadow" /><span className="visual-number">0{item.number}</span><span className="detail-sticker">SLOW<br />SIP<br /><i>club</i></span></div>
        <div className="detail-copy"><span className="eyebrow">{item.category.toUpperCase()} / SENJA ORIGINAL</span><h1>{item.name}<em>.</em></h1><p className="detail-price">{item.price}</p><p className="detail-description">{item.description}</p><div className="taste-notes"><span className="eyebrow">KARAKTER RASA</span><p>{item.notes}</p></div><div className="detail-actions"><Link className="button button-dark" href="/contact">Pesan di kedai <span aria-hidden="true">↗</span></Link><Link className="quiet-link" href="/menu">← Kembali ke menu</Link></div><span className="detail-footnote">Diracik segar oleh barista Senja, setiap hari.</span></div>
      </section>
    </div>
  );
}

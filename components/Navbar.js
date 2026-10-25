'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Beranda' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'Cerita kami' },
  { href: '/contact', label: 'Kontak' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="topline"><span>SEDIAKAN WAKTU UNTUK DIRIMU</span><span>SETIAP HARI · 08.00—22.00</span></div>
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="Senja Coffee, beranda">
          <span className="brand-mark" aria-hidden="true">s.</span>
          <span className="brand-name">senja<span>coffee</span></span>
        </Link>
        <nav className="main-nav" aria-label="Navigasi utama">
          {links.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return <Link key={link.href} className={active ? 'nav-link active' : 'nav-link'} href={link.href} aria-current={active ? 'page' : undefined}>{link.label}</Link>;
          })}
        </nav>
        <Link className="nav-cta" href="/menu">Pesan kopi <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}

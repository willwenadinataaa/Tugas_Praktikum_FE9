import Link from 'next/link';

export default function NotFound() {
  return <div className="not-found section-shell"><span className="eyebrow">404 / KOPINYA BELUM KETEMU</span><h1>Sepertinya kamu<br /><em>tersesat sebentar.</em></h1><p>Halaman yang dicari tidak ada di menu kami.</p><Link className="button button-dark" href="/">Kembali ke beranda <span aria-hidden="true">↗</span></Link></div>;
}

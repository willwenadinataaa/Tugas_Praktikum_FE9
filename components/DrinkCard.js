import Link from 'next/link';

export default function DrinkCard({ item }) {
  return (
    <Link className="drink-card" href={`/menu/${item.slug}`}>
      <div className={`drink-visual ${item.visual}`} aria-hidden="true">
        <span className="visual-sun" />
        <span className="visual-bean bean-one" />
        <span className="visual-bean bean-two" />
        <span className="cup-illustration"><span className="cup-foam" /><span className="cup-logo">s.</span></span>
        <span className="cup-shadow" />
        <span className="visual-number">0{item.number}</span>
      </div>
      <div className="drink-info"><div><h3>{item.name}</h3><p>{item.shortDescription}</p></div><span className="drink-price">{item.price}</span></div>
      <span className="card-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}

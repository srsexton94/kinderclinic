import "./SkeletonScreen.css";

function SkeletonScreen() {
  const cards: number[] = Array.from({ length: 20 }, (_v, i) => i);
  return (
    <ul className="skeleton-list" aria-busy="true" aria-live="polite">
      {cards.map((card) => (
        <li key={`skeleton-card-${card}`}>
          <div className="skeleton-card"></div>
        </li>
      ))}
    </ul>
  );
}
export default SkeletonScreen;

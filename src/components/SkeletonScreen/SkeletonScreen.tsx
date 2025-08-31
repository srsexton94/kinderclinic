import "./SkeletonScreen.css";

function SkeletonScreen() {
  const formEls: number[] = Array.from({ length: 5 }, (_v, i) => i)
  const cards: number[] = Array.from({ length: 20 }, (_v, i) => i);

  return (
    <div aria-busy="true" aria-live="polite">
    <div className="skeleton-form">
      {formEls.map(el => <div className="skeleton-item form-el" key={`skeleton-form-el-${el}`}></div>)}
    </div>
    <ul className="skeleton-list">
      {cards.map((card) => (
        <li key={`skeleton-card-${card}`}>
          <div className="skeleton-item card"></div>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default SkeletonScreen;

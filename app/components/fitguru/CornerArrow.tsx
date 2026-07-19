export default function CornerArrow() {
  return (
    <span className="corner-arrow" aria-hidden="true">
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 11L11 3M11 3H4M11 3V10"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

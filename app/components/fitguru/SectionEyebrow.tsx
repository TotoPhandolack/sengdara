export default function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 5.5v7M5.5 9h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      {children}
    </p>
  );
}

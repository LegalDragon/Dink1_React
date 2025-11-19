export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-xl p-4
        bg-[var(--bg-card)]
        text-[var(--text-main)]
        shadow-[var(--shadow-sm)]
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}

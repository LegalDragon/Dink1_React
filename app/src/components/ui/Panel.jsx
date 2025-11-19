export default function Panel({ title, children }) {
  return (
    <div className="bg-[var(--bg-card)] p-4 rounded-xl mb-4 shadow-[var(--shadow-sm)]">
      {title && (
        <div className="text-sm font-medium mb-2 text-[var(--text-muted)]">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}

export default function ListItem({ left, right, onClick, className = "" }) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-between
        px-4 py-3 rounded-xl cursor-pointer
        bg-[var(--bg-hover)]
        hover:bg-[var(--bg-active)]
        text-[var(--text-main)]
        transition-all duration-150
        ${className}
      `}
    >
      <div className="flex items-center gap-3">{left}</div>
      {right && <div>{right}</div>}
    </div>
  );
}

export default function Input({ className = "", ...rest }) {
  return (
    <input
      {...rest}
      className={`
        w-full p-3 rounded-lg
        bg-[var(--input-bg)]
        text-[var(--input-text)]
        placeholder-[var(--input-placeholder)]
        border border-[var(--input-border)]
        outline-none
        focus:border-[var(--accent)]
        transition-all duration-200
        ${className}
      `}
    />
  );
}

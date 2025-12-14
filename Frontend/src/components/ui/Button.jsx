export default function Button({
  children,
  className = "",
  variant = "primary",
  ...rest
}) {
  const styles = {
    primary: `
      bg-[var(--accent)]
      text-[var(--accent-contrast)]
      hover:opacity-90 active:opacity-80
    `,
    outline: `
      border border-[var(--accent)]
      text-[var(--accent)]
      bg-transparent
      hover:bg-[color-mix(in srgb, var(--accent) 10%, transparent)]
    `,
    subtle: `
      bg-[var(--bg-hover)]
      text-[var(--text-main)]
      hover:bg-[var(--bg-active)]
    `,
  };

  return (
    <button
      {...rest}
      className={`
        px-4 py-3 rounded-lg font-semibold
        transition-all duration-150
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* MODAL BOX */}
      <div className="
        relative z-10 p-6 rounded-xl w-[90%] max-w-md
        bg-[var(--bg-card)] text-[var(--text-main)]
        shadow-[var(--shadow-lg)]
        animate-[fadeIn_0.2s_ease]
      ">
        {children}
      </div>
    </div>
  );
}

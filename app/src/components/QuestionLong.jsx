export default function QuestionLong({ q, onChange }) {
  return (
    <div className="p-3 border rounded mb-3 bg-[var(--bg-card)]">
      <label className="block mb-2">{q.qPrompt}</label>
      <textarea className="w-full p-2 bg-[var(--bg-hover)]" onChange={e=>onChange(q.qid, e.target.value)} />
    </div>
  )
}

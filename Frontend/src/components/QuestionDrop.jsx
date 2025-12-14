export default function QuestionDrop({ q, onChange }) {
  return (
    <div className="p-3 border rounded mb-3 bg-[var(--bg-card)]">
      <label className="block mb-2">{q.qPrompt}</label>
      <select className="p-2 bg-[var(--bg-hover)]"
        onChange={e=>onChange(q.qid, e.target.value)}>
        {q.answers.map(a=>(
          <option key={a.answerCode} value={a.answerCode}>
            {a.answerPrompt}
          </option>
        ))}
      </select>
    </div>
  )
}

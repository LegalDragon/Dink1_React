export default function QuestionYesNo({ q, onChange }) {
  return (
    <div className="p-3 border rounded mb-3 bg-[var(--bg-card)]">
      <label className="block mb-2">{q.qPrompt}</label>
      <div className="flex gap-4">
        {q.answers.map(a=>(
          <button key={a.answerCode}
            className="px-3 py-1 bg-rocGold text-[var(--text-inverse)]"
            onClick={()=>onChange(q.qid, a.answerCode)}>
            {a.answerPrompt}
          </button>
        ))}
      </div>
    </div>
  )
}

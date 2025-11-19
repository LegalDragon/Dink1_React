
export default function DateTimeInput({label,value,onChange,mode}){
  const type = mode === 'date' ? 'date' : mode === 'time' ? 'time' : 'datetime-local'
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input 
        type={type}
        className="bg-[var(--bg-hover)] p-2 w-full rounded"
        value={value || ""}
        onChange={e=>onChange(e.target.value)}
      />
    </div>
  )
}


export default function NumericInput({label,value,onChange,min,max,step}){
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input 
        type="number"
        className="bg-[var(--bg-hover)] p-2 w-full rounded"
        value={value || ""}
        min={min}
        max={max}
        step={step}
        onChange={e=>onChange(e.target.value)}
      />
    </div>
  )
}

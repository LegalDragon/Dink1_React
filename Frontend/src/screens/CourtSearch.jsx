
export default function CourtSearch(){
  return (
    <div className="p-6">
      <h1 className="text-xl mb-3">Court Search</h1>
      <input className="w-full p-2 mb-3 bg-[var(--bg-hover)]" placeholder="City / Zip / State"/>
      <button className="bg-rocNeon text-[var(--text-inverse)] p-2 mb-3">Search</button>
      <div className="p-4 bg-[var(--bg-card)] rounded">Results</div>
    </div>
  )
}

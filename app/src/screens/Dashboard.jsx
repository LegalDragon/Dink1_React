
export default function Dashboard(){
  return (
    <div className="p-6">
      <h1 className="text-xl mb-3">Dashboard</h1>
      <div className="grid gap-3">
        <div className="p-4 bg-[var(--bg-card)] rounded">Available Plays</div>
        <div className="p-4 bg-[var(--bg-card)] rounded">News</div>
        <div className="p-4 bg-[var(--bg-card)] rounded">Leaderboard</div>
      </div>
    </div>
  )
}

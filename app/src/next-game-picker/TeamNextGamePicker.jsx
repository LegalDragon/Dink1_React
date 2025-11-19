
import { useState } from 'react'

export default function TeamNextGamePicker({teamSize}){
  const [teams,setTeams] = useState([
    {
      id:1, name:"Team A",
      members:["Alice","Bob"],
      rating:"3.7 avg"
    },
    {
      id:2, name:"Team B",
      members:["Cara","Dan"],
      rating:"4.2 avg"
    }
  ])

  const [selected,setSelected] = useState([])

  function toggleTeam(id){
    setSelected(prev => 
      prev.includes(id)
        ? prev.filter(x=>x!==id)
        : prev.length < 2 ? [...prev,id] : prev
    )
  }

  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-xl mb-4">Pick 2 Teams ({teamSize}v{teamSize})</h1>

      <div className="space-y-4">
        {teams.map(t=>(
          <div key={t.id}
            onClick={()=>toggleTeam(t.id)}
            className={
              'p-4 rounded bg-[var(--bg-card)] cursor-pointer ' +
              (selected.includes(t.id) ? 'border-2 border-rocGold' : '')
            }
          >
            <div className="text-lg font-bold">{t.name}</div>
            <div className="text-sm text-gray-300">{t.members.join(", ")}</div>
            <div className="text-xs text-gray-500">{t.rating}</div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {selected.length}/2 teams selected
      </div>
    </div>
  )
}


import { useState } from 'react'

export default function PlayerNextGamePicker({count}){
  const [players,setPlayers] = useState([
    {id:1,name:"Alice",tags:["3.5","lefty"]},
    {id:2,name:"Bob",tags:["4.0"]},
    {id:3,name:"Cara",tags:["3.0"]},
    {id:4,name:"Dan",tags:["4.5"]},
    {id:5,name:"Eli",tags:["3.5"]},
  ])

  const [selected,setSelected] = useState([])

  function toggle(p){
    setSelected(prev => 
      prev.includes(p) 
        ? prev.filter(x=>x!==p)
        : prev.length < count ? [...prev,p] : prev
    )
  }

  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-xl mb-4">Pick {count} Players</h1>

      <div className="grid grid-cols-2 gap-3">
        {players.map(p=>(
          <div key={p.id}
            onClick={()=>toggle(p.id)}
            className={
              'p-3 rounded bg-[var(--bg-card)] cursor-pointer ' +
              (selected.includes(p.id) ? 'border-2 border-rocGold' : '')
            }
          >
            <div className="font-bold">{p.name}</div>
            <div className="text-xs text-gray-400">{p.tags.join(", ")}</div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {selected.length}/{count} selected
      </div>
    </div>
  )
}

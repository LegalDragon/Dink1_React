
import { useState, useEffect } from 'react'
import api from '../global-api/apiClient'

export default function InvitePlayers({ eventId }) {
  const [players, setPlayers] = useState([])
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState("")
  const [tags, setTags] = useState("")

  useEffect(()=>{
    api.get('/friends/list').then(res=>{
      setPlayers(res.data || [])
    })
  },[])

  const filtered = players.filter(p=>{
    const matchName = p.name.toLowerCase().includes(search.toLowerCase())
    const matchTag = tags 
      ? (p.tags || []).some(t => t.toLowerCase().includes(tags.toLowerCase()))
      : true
    return matchName && matchTag
  })

  function toggle(id){
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  async function sendInvites(){
    await api.post('/partyplay/invite', { eventId, playerIds: selected })
    alert("Invites sent!")
  }

  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-xl mb-4">Invite Players</h1>

      <input 
        className="w-full bg-[var(--bg-hover)] p-2 mb-2"
        placeholder="Search by name"
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />

      <input 
        className="w-full bg-[var(--bg-hover)] p-2 mb-3"
        placeholder="Filter by tag (e.g. 3.5, lefty, fun)"
        value={tags}
        onChange={e=>setTags(e.target.value)}
      />

      <div className="space-y-2 max-h-80 overflow-auto">
        {filtered.map(p=>(
          <div 
            key={p.id}
            className="p-3 bg-[var(--bg-card)] rounded flex justify-between items-center"
          >
            <div>
              <div className="text-lg">{p.name}</div>
              <div className="text-xs text-gray-400">{p.tags?.join(", ")}</div>
            </div>
            <button
              className={
                selected.includes(p.id)
                  ? "px-3 py-1 bg-red-600 rounded"
                  : "px-3 py-1 bg-rocNeon text-[var(--text-inverse)] rounded"
              }
              onClick={()=>toggle(p.id)}
            >
              {selected.includes(p.id) ? "Remove" : "Invite"}
            </button>
          </div>
        ))}
      </div>

      <button 
        className="mt-4 bg-rocGold text-[var(--text-inverse)] p-2 rounded w-full"
        onClick={sendInvites}
      >
        Send Invites
      </button>
    </div>
  )
}

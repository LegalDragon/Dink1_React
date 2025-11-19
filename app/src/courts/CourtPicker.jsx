
import { useState, useEffect } from 'react'
import api from '../global-api/apiClient'

export default function CourtPicker({ onSelect }) {
  const [courts, setCourts] = useState([])
  const [search, setSearch] = useState("")
  const [gpsCourt, setGpsCourt] = useState(null)

  useEffect(()=>{
    api.get('/courts/list').then(res=>{
      setCourts(res.data || [])
    })
  },[])

  async function detectGPS(){
    if(!navigator.geolocation){
      alert("GPS not supported.")
      return
    }
    navigator.geolocation.getCurrentPosition(pos=>{
      const {latitude, longitude} = pos.coords
      api.get(`/courts/nearby?lat=${latitude}&lng=${longitude}`).then(res=>{
        setGpsCourt(res.data || null)
      })
    })
  }

  const filtered = courts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.city.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-xl mb-3">Select Court</h1>

      <input 
        className="w-full bg-[var(--bg-hover)] p-2 mb-3"
        placeholder="Search by name/city"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <button 
        className="bg-rocNeon text-[var(--text-inverse)] px-3 py-2 rounded mb-4"
        onClick={detectGPS}
      >
        Use Nearby Courts (GPS)
      </button>

      {gpsCourt && (
        <div className="p-3 bg-[var(--bg-card)] rounded mb-4">
          <h2 className="text-lg mb-1">Nearest Court</h2>
          <p>{gpsCourt.name}</p>
          <button 
            className="mt-2 bg-rocGold text-[var(--text-inverse)] px-3 py-1 rounded"
            onClick={()=>onSelect(gpsCourt)}
          >
            Select
          </button>
        </div>
      )}

      <div className="space-y-2 max-h-80 overflow-auto">
        {filtered.map(c=>(
          <div key={c.id} className="p-3 bg-[var(--bg-card)] rounded flex justify-between">
            <div>
              <div className="text-lg">{c.name}</div>
              <div className="text-xs text-gray-400">{c.city}, {c.state}</div>
            </div>
            <button 
              className="bg-rocGold text-[var(--text-inverse)] px-3 py-1 rounded"
              onClick={()=>onSelect(c)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

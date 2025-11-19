
import { useState } from 'react'
import api from '../global-api/apiClient'

export default function ScheduleEventFlow(){
  const [form, setForm] = useState({date:"", time:"", location:""})
  const [status, setStatus] = useState("")
  const [eventId, setEventId] = useState(null)

  async function submit(){
    setStatus("Submitting...")
    try{
      const res = await api.post('/partyplay/schedule', form)
      setEventId(res.data.eventId)
      setStatus("Event Created!")
    }catch(e){
      setStatus("Error submitting event.")
    }
  }

  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-xl mb-4">Finalize Event</h1>
      <input className="w-full p-2 bg-[var(--bg-hover)] mb-3" placeholder="Date" value={form.date}
        onChange={e=>setForm({...form,date:e.target.value})} />
      <input className="w-full p-2 bg-[var(--bg-hover)] mb-3" placeholder="Time" value={form.time}
        onChange={e=>setForm({...form,time:e.target.value})} />
      <input className="w-full p-2 bg-[var(--bg-hover)] mb-3" placeholder="Location" value={form.location}
        onChange={e=>setForm({...form,location:e.target.value})} />

      <button className="bg-rocGold text-[var(--text-inverse)] p-2" onClick={submit}>Submit</button>

      {status && <div className="mt-4">{status}</div>}
      {eventId && <div className="mt-4">Event ID: {eventId}</div>}
    </div>
  )
}

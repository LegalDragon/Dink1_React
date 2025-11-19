
import api from '../../global-api/apiClient'

export async function scheduleEvent(data){
  // placeholder API call
  const payload = {
    date: data.date,
    time: data.time,
    location: data.location
  }

  const res = await api.post('/partyplay/schedule', payload)
  return res.data
}

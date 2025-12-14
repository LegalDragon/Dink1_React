
import api from '../global-api/apiClient'

export async function invitePlayers(eventId, playerIds){
  return api.post('/partyplay/invite', {eventId, playerIds})
}

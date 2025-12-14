
import PlayerNextGamePicker from './PlayerNextGamePicker'
import TeamNextGamePicker from './TeamNextGamePicker'

export default function AutoNextPicker(){
  const event = {
    teamMode: true,
    teamSize: 2
  }

  if(event.teamMode){
    return <TeamNextGamePicker teamSize={event.teamSize}/>
  }
  return <PlayerNextGamePicker count={event.teamSize * 2}/>
}

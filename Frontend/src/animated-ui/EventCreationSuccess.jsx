
import eventPulse from '../icons/animated/event_pulse.svg'

export default function EventCreationSuccess(){
  return (
    <div className="flex flex-col items-center p-6 text-[var(--text-main)]">
      <img src={eventPulse} className="w-24 h-24" />
      <p className="mt-4 text-rocGold text-xl animate-fadeIn">Event Created!</p>
    </div>
  )
}

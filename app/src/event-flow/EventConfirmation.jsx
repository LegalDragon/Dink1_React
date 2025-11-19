
export default function EventConfirmation({eventId}){
  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-xl mb-4">Event Created</h1>
      <p>Your event ID: {eventId}</p>
      <button className="bg-rocNeon text-[var(--text-inverse)] p-2 mt-4">Invite Players</button>
    </div>
  )
}


import inviteSparkle from '../icons/animated/invite_sparkle.svg'
import { useState } from 'react'

export default function InviteButtonAnimated(){
  const [spark, setSpark] = useState(false)

  return (
    <button 
      onClick={()=>{
        setSpark(true)
        setTimeout(()=>setSpark(false), 800)
      }}
      className="relative bg-rocGold text-[var(--text-inverse)] px-4 py-2 rounded"
    >
      Invite Players
      {spark && (
        <img src={inviteSparkle} className="absolute -top-4 -right-4 w-10 h-10" />
      )}
    </button>
  )
}

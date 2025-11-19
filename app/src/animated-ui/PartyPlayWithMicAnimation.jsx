
import { useState } from 'react'
import micPulse from '../icons/animated/mic_pulse.svg'

export default function PartyPlayWithMicAnimation(){
  const [listening, setListening] = useState(false)

  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-2xl mb-4">Party Play</h1>

      {!listening && (
        <button 
          onClick={()=>setListening(true)}
          className="bg-rocNeon text-[var(--text-inverse)] px-4 py-2 rounded">
          Tap to Speak
        </button>
      )}

      {listening && (
        <div className="flex flex-col items-center">
          <img src={micPulse} className="w-24 h-24 animate-fadeIn" />
          <p className="mt-3 text-rocGold animate-pulse">Listening...</p>
        </div>
      )}
    </div>
  )
}

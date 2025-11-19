
import { useState } from 'react'
import blePulse from '../icons/animated/ble_pulse.svg'

export default function BLEDeviceScanner(){
  const [connected, setConnected] = useState(false)

  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-xl mb-4">Connect ROC Device</h1>

      {!connected ? (
        <div className="flex flex-col items-center">
          <img src={blePulse} className="w-28 h-28" />
          <p className="mt-3 text-gray-300 animate-pulse">Searching for devices...</p>
          <button 
            onClick={()=>setConnected(true)}
            className="mt-4 bg-rocGold text-[var(--text-inverse)] p-2 rounded">
            Simulate Connect
          </button>
        </div>
      ) : (
        <p className="text-rocGold text-xl">Connected!</p>
      )}
    </div>
  )
}

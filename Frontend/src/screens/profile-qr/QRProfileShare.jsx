
import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

export default function QRProfileShare({ user }) {
  const [qr, setQr] = useState("")
  const profileUrl = `https://dink1.com/u/${user?.id}`

  useEffect(()=>{
    QRCode.toDataURL(profileUrl)
      .then(setQr)
      .catch(console.error)
  },[profileUrl])

  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-xl mb-4">Share Your Profile</h1>

      <div className="bg-[var(--bg-card)] p-4 rounded max-w-xs mx-auto">
        <img src={qr} alt="QR Code" className="w-full mb-4 rounded" />

        <div className="text-center text-xs break-all text-gray-300">
          {profileUrl}
        </div>

        <button
          className="mt-4 w-full bg-rocGold text-[var(--text-inverse)] p-2 rounded"
          onClick={()=>{
            navigator.clipboard.writeText(profileUrl)
            alert("Profile link copied!")
          }}
        >
          Copy Profile Link
        </button>
      </div>
    </div>
  )
}

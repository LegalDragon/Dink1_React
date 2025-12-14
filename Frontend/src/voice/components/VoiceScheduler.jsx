
import { useState } from 'react'
import { parseSpeechToEvent } from '../utils/parseSpeechToEvent'
import { scheduleEvent } from '../utils/scheduleEvent'

export default function VoiceScheduler(){
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  async function startListening(){
    setError("")
    setTranscript("")
    setResult(null)

    if (!('webkitSpeechRecognition' in window)){
      setError("Voice recognition not supported in this browser.")
      return
    }

    const recognition = new webkitSpeechRecognition()
    recognition.lang = "en-US"
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => setListening(true)
    recognition.onerror = e => { setError(e.error); setListening(false) }
    recognition.onend = () => setListening(false)

    recognition.onresult = async (event)=>{
      const text = event.results[0][0].transcript
      setTranscript(text)

      const parsed = parseSpeechToEvent(text)
      setResult(parsed)

      try{
        await scheduleEvent(parsed)
      }catch(e){
        setError(e.message)
      }
    }

    recognition.start()
  }

  return (
    <div className="p-4 bg-[var(--bg-card)] rounded text-[var(--text-main)]">
      <h2 className="text-xl mb-4">Voice Event Scheduler</h2>

      <button
        onClick={startListening}
        className={`px-4 py-2 rounded ${listening ? 'bg-red-600' : 'bg-rocNeon text-[var(--text-inverse)]'}`}>
        {listening ? "Listening..." : "Tap to Speak"}
      </button>

      {transcript && (
        <div className="mt-4 p-3 bg-[var(--bg-hover)] rounded">
          <strong>Heard:</strong> {transcript}
        </div>
      )}

      {result && (
        <div className="mt-4 p-3 bg-[var(--bg-hover)] rounded text-sm">
          <strong>Parsed Event:</strong>
          <pre className="mt-2 whitespace-pre-wrap">{JSON.stringify(result,null,2)}</pre>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-800 border border-red-500 rounded">
          Error: {error}
        </div>
      )}
    </div>
  )
}

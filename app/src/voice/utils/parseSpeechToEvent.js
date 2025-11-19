
export function parseSpeechToEvent(text){
  const lower = text.toLowerCase()

  // naive NLP extraction
  const dateMatch = lower.match(/(today|tomorrow|\d{1,2}\/\d{1,2}\/\d{2,4})/)
  const timeMatch = lower.match(/(\d{1,2}\s?(am|pm))/)
  const locationMatch = lower.match(/at ([a-zA-Z0-9 ]+)/)

  return {
    rawText: text,
    date: dateMatch ? dateMatch[0] : null,
    time: timeMatch ? timeMatch[0] : null,
    location: locationMatch ? locationMatch[1].trim() : null
  }
}

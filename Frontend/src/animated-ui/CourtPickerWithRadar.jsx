
import radar from '../icons/animated/radar.svg'

export default function CourtPickerWithRadar(){
  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-xl mb-4">Find Courts</h1>

      <div className="flex flex-col items-center">
        <img src={radar} className="w-32 h-32" />
        <p className="mt-2 text-gray-300 animate-pulse">Detecting nearby courts...</p>
      </div>
    </div>
  )
}

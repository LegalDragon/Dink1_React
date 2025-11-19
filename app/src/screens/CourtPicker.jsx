
import Icon from '../icon-system/components/Icon'

export default function CourtPicker(){
  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-2xl mb-4 flex items-center gap-2">
        <Icon name="court" size={28}/> Select Court
      </h1>
    </div>
  )
}

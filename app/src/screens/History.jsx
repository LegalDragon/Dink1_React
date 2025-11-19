
import Icon from '../icon-system/components/Icon'

export default function History(){
  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-2xl mb-4 flex items-center gap-2">
        <Icon name="calendar" size={28}/> History
      </h1>
    </div>
  )
}

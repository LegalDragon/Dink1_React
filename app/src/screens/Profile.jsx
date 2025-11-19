
import Icon from '../icon-system/components/Icon'

export default function Profile(){
  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-2xl mb-4 flex items-center gap-2">
        <Icon name="profile" size={28}/> Profile
      </h1>
    </div>
  )
}

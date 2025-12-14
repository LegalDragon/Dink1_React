
import Icon from '../icon-system/components/Icon'

export default function Login(){
  return (
    <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-2xl mb-6 flex items-center gap-2">
        <Icon name="profile" size={28}/> Login
      </h1>
    </div>
  )
}

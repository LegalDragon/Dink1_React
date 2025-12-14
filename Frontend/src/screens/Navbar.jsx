
import Icon from '../icon-system/components/Icon'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="p-4 bg-[var(--bg-card)] flex gap-6 text-[var(--text-main)]">
      <Link to="/"><Icon name="home" size={26}/></Link>
      <Link to="/friends"><Icon name="friends" size={26}/></Link>
      <Link to="/clubs"><Icon name="clubs" size={26}/></Link>
      <Link to="/events"><Icon name="events" size={26}/></Link>
      <Link to="/profile"><Icon name="profile" size={26}/></Link>
      <Link to="/settings"><Icon name="settings" size={26}/></Link>
    </nav>
  )
}

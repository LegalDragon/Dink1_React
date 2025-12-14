
import AnimatedNavbar from '../animated-ui/AnimatedNavbar'
import SafeArea from './SafeArea'
import './transitions.css'

export default function Layout({children}){
  return (
    <div className="bg-[var(--bg-page)] min-h-screen text-[var(--text-main)]">
      <SafeArea />
      <div className="page-slide">
        {children}
      </div>
      <div className="pt-8 pb-8" />

      <AnimatedNavbar />
    </div>
  )
}

import { NavLink } from 'react-router-dom'

const linkBase =
  "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-slate-800"
const activeClasses = "bg-rocGold text-slate-900"
const inactiveClasses = "text-slate-200"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-rocNeon/10 ring-1 ring-rocNeon/40">
            <span className="text-xs font-bold text-rocNeon">ROC</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-50">
              DinkOne Starter
            </div>
            <div className="text-xs text-slate-400">
              React + Tailwind + Router
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs sm:text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/friends"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Friends
          </NavLink>
          <NavLink
            to="/clubs"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Clubs
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Events
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

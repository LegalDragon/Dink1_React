import { Link, useLocation } from "react-router-dom"
import Icon from "../icon-system/components/Icon"

export default function AnimatedNavbar() {
  const { pathname } = useLocation()
  const active = pathname.replace("/", "") || "home"

  const tabs = [
    { name: "home", label: "Home", path: "/" },
    { name: "profile", label: "Profile", path: "/profile" },
    { name: "friends", label: "Friends", path: "/friends" },
    { name: "clubs", label: "Clubs", path: "/clubs" },
    { name: "events", label: "Events", path: "/events" },
    { name: "settings", label: "Settings", path: "/Settings" }
  ] 

  return (
    <div className="
      fixed bottom-0 left-0 right-0 z-[99]
      bg-[var(--bg-card)] text-[var(--text-main)] border-b border-[var(--divider-color)]
      backdrop-blur-lg
      border-t 
      flex justify-around py-2
    ">
      {tabs.map(t => {
        const isActive = t.name === active
        return (
          <Link
            key={t.name}
            to={t.path}
            className="flex flex-col items-center"
          >
            <Icon
              name={t.name}
              size={26}
              className={
                "transition-all duration-300 " +
                (isActive
                  ? "scale-110 drop-shadow-[0_0_6px_#f7c948]"
                  : "opacity-50"
                )
              }
            />
            <span
              className={
                "text-[11px] mt-1 " +
                (isActive ? "text-rocGold" : "")
              }
            >
              {t.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

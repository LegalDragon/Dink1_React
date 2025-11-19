import Icon from "../icon-system/components/Icon"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="px-6 py-8 text-[var(--text)]">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-rocGold">Dink1</h1>
          <p className="text-sm text-gray-400 mt-1">
            Play • Connect • Compete
          </p>
        </div>
        <Icon name="paddle" size={40} className="drop-shadow-[0_0_10px_#2994FF]" />
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-2 gap-5 mb-10">

        <Link
          to="/partyplay"
          className="bg-[var(--bg-card)] rounded-2xl p-5 flex flex-col items-center hover:bg-[var(--bg-hover)] transition"
        >
          <Icon name="events" size={40} className="mb-3" />
          <span className="text-sm">Party Play</span>
        </Link>

        <Link
          to="/events"
          className="bg-[var(--bg-card)] rounded-2xl p-5 flex flex-col items-center hover:bg-[var(--bg-hover)] transition"
        >
          <Icon name="calendar" size={40} className="mb-3" />
          <span className="text-sm">Events</span>
        </Link>

        <Link
          to="/clubs"
          className="bg-[var(--bg-card)] rounded-2xl p-5 flex flex-col items-center hover:bg-[var(--bg-hover)] transition"
        >
          <Icon name="clubs" size={38} className="mb-3" />
          <span className="text-sm">Clubs</span>
        </Link>

        <Link
          to="/friends"
          className="bg-[var(--bg-card)] rounded-2xl p-5 flex flex-col items-center hover:bg-[var(--bg-hover)] transition"
        >
          <Icon name="friends" size={38} className="mb-3" />
          <span className="text-sm">Friends</span>
        </Link>
      </div>

      {/* Highlights */}
      <div className="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-2xl p-5 border border-gray-800 mb-10">
        <h2 className="text-lg font-semibold mb-3">Next Game Tools</h2>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Pick Next Game</span>
          <Link
            to="/next"
            className="flex items-center gap-2 text-rocGold text-sm font-semibold hover:underline"
          >
            Go
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </div>

    </div>
  )
}

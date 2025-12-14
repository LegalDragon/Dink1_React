
import Icon from '../icon-system/components/Icon'
import { useEffect, useState } from 'react'


export default function Friends() {
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError('')
        // TODO: point this to your real endpoint
        // const { data } = await api.get('/friends')
        // setFriends(data)
        await new Promise((r) => setTimeout(r, 400))
        setFriends([
          { id: 1, name: 'Demo Player 1', rating: 3.5, tags: ['local', 'fun'] },
          { id: 2, name: 'Demo Player 2', rating: 4.0, tags: ['lefty', 'aggressive'] },
        ])
      } catch (err) {
        setError('Failed to load friends. Check the API base URL.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    
    <div className="mx-auto max-w-5xl px-4 py-6">
       <div className="p-6 text-[var(--text-main)]">
      <h1 className="text-2xl mb-4 flex items-center gap-2">
        <Icon name="friends" size={28}/> Friends
      </h1>
    </div>
      <h1 className="text-xl font-semibold text-slate-50 sm:text-2xl">
        Friends
      </h1>
      <p className="mt-1 text-xs text-slate-400">
        Wire this page to your backend <code className="font-mono text-rocNeon">
          /friends
        </code>{' '}
        endpoint.
      </p>

      {loading && <p className="mt-4 text-sm text-slate-300">Loading…</p>}
      {error && (
        <p className="mt-4 text-sm text-rose-400">
          {error}
        </p>
      )}

      <div className="mt-4 space-y-3">
        {friends.map((f) => (
          <div
            key={f.id}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3"
          >
            <div>
              <div className="text-sm font-medium text-slate-100">
                {f.name}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                Rating: <span className="font-mono">{f.rating?.toFixed(1)}</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                {f.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="rounded-lg bg-rocGold px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-rocGold/90">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

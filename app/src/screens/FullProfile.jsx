
import { useState, useEffect } from 'react'
import { api } from '/src/global-api/apiClient.js';

export default function FullProfile() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    homeClub: "",
    skill: "",
    tags: [],
    avatarUrl: ""
  })

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get('/user/profile')
        setProfile(res.data)
      } catch (e) {
        setError("Failed to load profile.")
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  async function save() {
    setSaving(true)
    setError("")
    try {
      await api.post('/user/profile/update', profile)
      alert("Profile saved!")
    } catch (e) {
      setError("Save failed.")
    } finally {
      setSaving(false)
    }
  }

  function update(key, value) {
    setProfile(prev => ({ ...prev, [key]: value }))
  }

  function updateTags(value) {
    update("tags", value.split(",").map(t => t.trim()).filter(t => t))
  }

  async function uploadAvatar(e) {
    const file = e.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append("avatar", file)

    try {
      const res = await api.post('/user/profile/avatar', formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      update("avatarUrl", res.data.url)
    } catch (e) {
      setError("Avatar upload failed.")
    }
  }

  if (loading) return <div className='p-6 text-[var(--text-main)]'>Loading...</div>

  return (
    <div className='p-6 bg-[var(--card)]  text-[var(--text)]'>
      <h1 className='text-2xl mb-4'>My Profile</h1>

      {error && <div className='p-2 bg-red-700 mb-3'>{error}</div>}

      <div className='bg-[var(--card)] p-4 rounded shadow mb-4'>
        {/* Avatar */}
        <div className='mb-4'>
          <label className='block mb-1'>Profile Picture</label>
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt='avatar'
              className='h-24 w-24 rounded-full mb-2 border object-cover'
            />
          ) : (
            <div className='h-24 w-24 bg-[var(--card)] rounded-full border mb-2'></div>
          )}
          <input type='file' accept='image/*' onChange={uploadAvatar} />
        </div>

        {/* Name */}
        <label className='block mb-1'>Name</label>
        <input
          value={profile.name}
          onChange={e => update("name", e.target.value)}
          className='w-full   p-2 mb-3'
        />

        {/* Email */}
        <label className='block mb-1'>Email</label>
        <input
          value={profile.email}
          onChange={e => update("email", e.target.value)}
          className='w-full   p-2 mb-3'
        />

        {/* Phone */}
        <label className='block mb-1'>Phone</label>
        <input
          value={profile.phone}
          onChange={e => update("phone", e.target.value)}
          className='w-full  p-2 mb-3'
        />

        {/* Gender */}
        <label className='block mb-1'>Gender</label>
        <select
          value={profile.gender}
          onChange={e => update("gender", e.target.value)}
          className='w-full  p-2 mb-3'
        >
          <option value=''>Select</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>

        {/* Home Club */}
        <label className='block mb-1'>Home Club</label>
        <input
          value={profile.homeClub}
          onChange={e => update("homeClub", e.target.value)}
          className='w-full  p-2 mb-3'
        />

        {/* Skill */}
        <label className='block mb-1'>Skill Level</label>
        <select
          value={profile.skill}
          onChange={e => update("skill", e.target.value)}
          className='w-full bg-[var(--card)] p-2 mb-3'
        >
          <option value=''>Select</option>
          <option value='2.0'>2.0</option>
          <option value='2.5'>2.5</option>
          <option value='3.0'>3.0</option>
          <option value='3.5'>3.5</option>
          <option value='4.0'>4.0</option>
          <option value='4.5'>4.5</option>
          <option value='5.0'>5.0</option>
        </select>

        {/* Tags */}
        <label className='block mb-1'>Tags (comma separated)</label>
        <input
          value={profile.tags.join(", ")}
          onChange={e => updateTags(e.target.value)}
          className='w-full   p-2 mb-3'
        />
      </div>

      <button
        onClick={save}
        className='bg-rocGold text-[var(--text-inverse)] p-2 rounded w-full'
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Profile"}
      </button>
    </div>
  )
}

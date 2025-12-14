
import React from 'react'
import { iconPacks } from '../index'
import { useIconPack } from '../hooks/useIconPack'

export default function Icon({ name, className="", size=24 }){
  const { iconPack } = useIconPack()
  const pack = iconPacks[iconPack]

  const IconSrc = pack[name]

  if(!IconSrc){
    console.warn("Icon not found:", name)
    return null
  }

  return (
    <img 
      src={IconSrc} 
      className={className} 
      alt={name} 
      style={{width:size, height:size}}
    />
  )
}

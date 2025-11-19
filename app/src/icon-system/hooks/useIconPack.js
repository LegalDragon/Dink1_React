
import { useState, useEffect } from 'react'

export function useIconPack(){
  const [pack, setPack] = useState(localStorage.getItem('iconPack') || 'line')

  useEffect(()=>{
    localStorage.setItem('iconPack', pack)
  }, [pack])

  return {
    iconPack: pack,
    setIconPack: (newPack)=> setPack(newPack)
  }
}

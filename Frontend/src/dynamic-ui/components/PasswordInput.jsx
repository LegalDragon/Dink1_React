
import { useState } from 'react'
import Icon from '../../icon-system/components/Icon'

export default function PasswordInput({label,value,onChange,minLength,maxLength}){
  const [show,setShow] = useState(false)

  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <div className="relative">
        <input 
          type={show ? "text" : "password"}
          className="bg-[var(--bg-hover)] p-2 w-full rounded pr-10"
          value={value || ""}
          minLength={minLength}
          maxLength={maxLength}
          onChange={e=>onChange(e.target.value)}
        />
        <button 
          type="button"
          className="absolute right-2 top-2"
          onClick={()=>setShow(!show)}
        >
          <Icon name="eye" size={20}/>
        </button>
      </div>
    </div>
  )
}

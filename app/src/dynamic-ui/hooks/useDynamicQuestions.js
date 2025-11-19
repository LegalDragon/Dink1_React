
import { useState, useEffect } from 'react'
import { fetchQuestionSet } from '../../app/src/api_ui'

export function useDynamicQuestions(code){
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState("")
  const [questions,setQuestions]=useState([])

  useEffect(()=>{
    setLoading(true)
    setError("")
    fetchQuestionSet(code)
      .then(d=>{
        setQuestions(d.questions||[])
      })
      .catch(e=>{
        setError(e.message)
      })
      .finally(()=>setLoading(false))
  },[code])

  return {loading,error,questions}
}

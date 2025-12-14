
export function validateAnswers(questions, answers){
  const errors={}
  questions.forEach(q=>{
    if(q.required === 'y'){
      if(!answers[q.qid] || answers[q.qid].toString().trim()===''){
        errors[q.qid] = 'This field is required.'
      }
    }
  })
  return errors
}

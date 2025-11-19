
export function formatPayload(code, answers){
  return {
    QuestionSetCode: code,
    questionAnswers: Object.entries(answers).map(([qid,answer])=>({
      questionID: Number(qid),
      answerID: Number(qid),
      answer
    }))
  }
}

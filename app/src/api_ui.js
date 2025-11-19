import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pietest.funtimepb.com/v2',
  timeout: 15000
})

export async function fetchQuestionSet(code) {
  const res = await api.get(`/ui/questions/${encodeURIComponent(code)}`)
  return res.data
}

export async function submitAnswers(payload) {
  const res = await api.post('/ui/Answers', payload)
  return res.data
}

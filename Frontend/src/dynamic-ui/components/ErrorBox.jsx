
export default function ErrorBox({message}){
  if(!message) return null;
  return (
    <div className='p-3 bg-red-900 text-red-200 border border-red-400 rounded mb-4'>
      {message}
    </div>
  )
}

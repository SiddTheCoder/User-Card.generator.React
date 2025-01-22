
import { use, useState } from 'react'
import Card from './components/Card'

export default function App(){
  const [userName,setUserName] = useState('')
  const [showCard,setShowCard] = useState(false)
  
 function toogleCard(){
  setShowCard((prev) => !(prev))
 }
 function handleInputChange(e){
  setUserName(e.target.value)
 }
  return(
    <>
    <div 
    onClick={toogleCard}
    className='text-white text-2xl border rounded w-44 text-center bg-purple-950 cursor-pointer'
    >
      {showCard ? 'Hide Card' : 'Show Card'}
    <div>
      {showCard && <Card />}
    </div>
    </div>

    <div className='text-black'>
      <input
       type="text" 
       name="userName" 
       value={userName}
       onChange={handleInputChange}
       id="userName" />
    </div>
    <div
      className='text-white bg-slate-800'
    >
      Welcome {userName}
    </div>
    </>
  )

}
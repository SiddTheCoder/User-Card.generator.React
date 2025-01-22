import { use, useState } from 'react'
import Card from './components/Card'

export default function RealApp(){
    const [formData,setFormData] = useState({
        userName : '',
        userNickName : ''
    })

    const [userFinalName,setUserFinalName] = useState('')

    function handleFormSubmit(e){
        e.preventDefault()
        console.log("Form Data:", formData);
        setUserFinalName(formData.userName)
    }

    
    const handleInputChange = (event) => {
      const {name, value} = event.target
      setFormData({
        ...formData,
       [name] : value,
      })
    }

    const [generateCard,setGenerateCard] = useState(false)

    function handleGenerateCard(e){
        setGenerateCard((prev) => !(prev))
    }

    return(
        <>
        <h1 className='text-purple-50 text-center text-4xl'>Welcome To Card Generator</h1>
        <div className='h-[90vh] w-full flex bg-yellow-200 justify-center items-center gap-10'>
        <form
         onSubmit={handleFormSubmit}
         className='h-[400px] w-[500px] bg-purple-500 rounded-md ml-44 flex flex-col justify-center items-center'
        >
        <input 
         type="text" 
         name='userName'
         value={formData.userName}
         onChange={handleInputChange}
         placeholder='User Name ...'
         className='p-2 text-white text-xl outline-none border-b-2 border-b-white bg-purple-500 placeholder:text-white hover:placeholder:text-md transition-all duration-1000 ease-in-out'
        />
        <input 
         type="text" 
         name='userNickName'
         value={formData.userNickName}
         onChange={handleInputChange}
         placeholder='User NicnName ...'
         className='p-2 text-white text-xl outline-none border-b-2 border-b-white bg-purple-500 placeholder:text-white hover:placeholder:text-md transition-all duration-1000 ease-in-out'
        />

        <button
         onClick={handleGenerateCard}
         className='p-1 border mt-10 rounded bg-purple-400 text-white font-semibold px-4 py-2 hover:bg-purple-500'
        >
            {generateCard ? 'Degenerate User Card' : 'Generate User Card'}
        </button>
        </form>
        <div>
            {generateCard && <Card userName={formData.userName} userNickName={formData.userNickName} />}
        </div>
        </div>
        </>
    )
}
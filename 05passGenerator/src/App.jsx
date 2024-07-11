import { useCallback, useState } from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [char , setChar] = useState(false)
  const [password , setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str += "0123456789"
    }

    if(char){
      str += "@#$&^!?"
    }

    for (let i = 0; -+i < array.length; i++) {
      let char = Math.floor(Math.random()*str.length+1)  

      pass = str.charAt(char)  
    }

    setPassword(pass)


  }, [length, number, char, setPassword])

  return (
    <>
     <h1 className='text-4xl text-center text-black m-8'> Password Generator</h1>
     <div className='w-full max-w-md mx-auto h-40 shadow-md rounded-md px-4 my-8 bg-gray-600'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 p-3'>
        <input type="text" value={password} className='outline-none w-full py-1 p-3'placeholder='password'readOnly></input>
        <button className='px-2 text-xl bg-blue-500 text-center '>copy</button>

      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e)=>{
            setLength(e.target.value)
          }}></input>
          <label className='text-white'>Length : {length}</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App

import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [char , setChar] = useState(false)
  const [password , setPassword] = useState("")

  //useRef hook- with th refrence we can manipulate the UI componenets
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{//this is used for optimization (stored in cache)
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str += "0123456789"
    }

    if(char){
      str += "@#$_&^!?"
    }

    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length+1)  

      pass += str.charAt(char)  
    }

    setPassword(pass)
  }, [length, number, char])


  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator]//if any change occur in this re-run this fun
)

const copyPasswordToClipboard= useCallback(()=>{

  //for optimization 
  passwordRef.current?.select()//optionally selection
  passwordRef.current?.setSelectionRange(0,99)//3 char selected

  window.navigator.clipboard.writeText(password)
  // alert("password copied!!!")
},[password])

  return (
    <>
     <h1 className='text-4xl text-center text-black m-8'> Password Generator</h1>
     <div className='w-full max-w-md mx-auto h-40 shadow-md rounded-md px-4 my-8 bg-gray-600'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 p-3'>
        <input type="text" value={password}
         className='outline-none w-full py-1 p-3'
         placeholder='password'
         readOnly
         ref={passwordRef}/>
        <button 
        onClick={copyPasswordToClipboard}
        className='px-2 text-xl bg-blue-500 text-center hover:bg-teal-300 '>copy</button>

      </div>

      <div className='flex text-sm gap-x-1'>

        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e)=>{
            setLength(e.target.value)
          }}/>
          <label className='text-white'>Length: {length}</label>
        </div>

        <div className='felx items-center gap-x-1 p-3'>
          <input 
              type="checkbox" defaultChecked={number} id='number'
              className=''
              onChange={()=>{
                setNumber((prev)=> !prev);
              }}/>
          <label className='text-white pl-1'>Number</label>
        </div>

        <div className='felx items-center gap-x-1 p-3'>
          <input 
              type="checkbox" defaultChecked={number} id='number'
              className=''
              onChange={()=>{
                setNumber((prev)=> !prev);//fire callback function
              }}/>
          <label className='text-white pl-1'>SpecialChar</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App

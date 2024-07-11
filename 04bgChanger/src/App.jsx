import { useState } from "react"


function App(){
  const [color, setColor] = useState("black")

  return (
  <>
    <div className="w-full h-screen duration-200"
      style={{background: "black"}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl ">
          <button
          onClick={()=>setColor("red")}
          className="outline-none px-4 "
          style={{background: "red"}}>Red</button>
          <button
          onClick={()=>setColor("green")}
          className="outline-none px-4 "
          style={{background: "green"}}>Green</button>
          <button
          onClick={()=>setColor("blue")}
          className="outline-none px-4 "
          style={{background: "blue"}}>Blue</button>
        </div>
      </div>
    </div>
    </>

  )
}

export default App

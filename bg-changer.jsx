import React, { useState } from 'react'

const Card = () => {

  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-150 "
     style ={{backgroundColor : color}}
    >
      <div className="fixed flex flex-wrap bottom-20 justify-center inset-x-0 px-2">
        <div className="fixed flex-wrap justify-center gap-7 shadow-lg bg-white px-3 py-3 rounded-3xl">
         <button onClick={()=>setColor("red")}
         className="outline-none px-4 py-1 rounded-full bg-red-800 text-white shadow-lg" 
         style={{backgroudColor:"red"}}>
          red
         </button>
         <button onClick={()=>setColor("blue")} 
         className="outline-none px-4 py-1 rounded-full bg-blue-900 text-white shadow-lg" 
         style={{backgroudColor:"blue"}}>
          blue
         </button>
         <button onClick={()=>setColor('green')}
         className="outline-none px-4 text-white bg-green-900 py-1 rounded-full  text-whiteshadow-lg" 
         style={{backgroudColor:"green"}}>
          green
         </button>
        </div>
        
      </div>
    

    </div>
    </>
  )
}

export default Card

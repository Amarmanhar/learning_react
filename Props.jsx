import React from 'react'

const Card = ({username,  btnText="visit me"}) => {
  return (
    <>
    <div className="max-w-sm mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Profile banner"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{username}</h2>
          <p className="text-gray-600 mt-2">
            Frontend Developer with a passion for creating clean and user-friendly interfaces.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            {btnText}
          </button>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Card
// App.jsx
//import { useState } from "react";
import Card from "./components/Card"

function App() {

  //  let [counter, setCounter]= useState(15)

  // const addValue =  ()=>{
  //   if(counter< 20){
  //     setCounter(counter + 1);
  //   }
  //   else{
  //     window.alert("reached 20 ")
  //   }
  // }
  
  return (
  <>
   {/* <h1 className="text-3xl font-bold underline">welcome to my first project</h1>
   <h2 className= "text-3xl font-bold underline"> Counter Value is: {counter}</h2>
   <button onClick={addValue}>Increase Value{counter}</button>
   <br/>
   <br/>
   <button>Decrerase Value {counter}</button> */}
   <Card username = "Amar Manhar" btnText = "click me"/>
   <Card username  = "john dheere" btnText = "visit me "/>
   <Card username = "helo dhere" />
  </>
   
  )
}

export default App


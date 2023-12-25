import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style = {{
      backgroundColor : color
    }}>
      <div className='fixed flex flex-wrap justify-center
    bottom-12 inset-x-0 px-2'> 
    <div className='flex flex-wrap justify-center gap-3
     shadow-lg px-3 rounded-xl py-2 bg-white'>
      <button
      onClick={() => setColor("red")}
      className='rounded-full py-1 text-white shadow-lg outline-none px-4'
      style = {{backgroundColor : "red"}}>Red
     </button>
      <button
      onClick={() => setColor("violet")}
      className='rounded-full py-1 text-white shadow-lg outline-none px-4'
      style = {{backgroundColor : "violet"}}>Violet
     </button>
      <button
      onClick={() => setColor("green")}
      className='rounded-full py-1 text-white shadow-lg outline-none px-4'
      style = {{backgroundColor : "Green"}}>Green
     </button>
      <button
      onClick={() => setColor("skyblue")}
      className='rounded-full py-1 text-white shadow-lg outline-none px-4'
      style = {{backgroundColor : "Blue"}}>Blue
     </button>
      <button
      onClick={() => setColor("beige")}
      className='rounded-full py-1 text-black shadow-lg outline-none px-4'
      style = {{backgroundColor : "beige"}}>beige
     </button>
      <button
      onClick={() => setColor("yellow")}
      className='rounded-full py-1 text-white shadow-lg outline-none px-4'
      style = {{backgroundColor : "yellow"}}>yellow
     </button>
      
     </div>
     </div>
    </div>
    

    </>
  )
}

export default App

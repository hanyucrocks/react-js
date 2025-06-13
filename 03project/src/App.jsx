import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl '>Photos test</h1>
    <div className='flex flex-wrap gap-6'>
      <Card username="hanyuc" spantext="instagram model" imgsrc={image1}/>
      <Card username="disha patani" spantext="calvin klein model" imgsrc={image2}/>

    </div>
    </>

  )
}

export default App

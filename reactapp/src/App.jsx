import { useState } from 'react'
import './App.css'
import Sample from './component/Sample'
import HomePage from './component/HomePage'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>

      <Routes>
        <Route path='/' element={<><HomePage/><Sample/></>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
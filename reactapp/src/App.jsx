import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Menu from './componets/menu'
import Article from './componets/article' 
import Homepage from './componets/Homepage'
import Contact from './componets/contact' 
import { Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Menu' element={<Menu count={count} setCount={setCount}/>}/>
      <Route path='/Article' element={<Article/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Menu from './componets/menu'
import Article from './componets/article' 
import Homepage from './componets/Homepage'


function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  return (
    <>
    <Menu count={count} setCount={setCount}/> 
    <Article />
    <Homepage />
      
    </>
  )
}

export default App

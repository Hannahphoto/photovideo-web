import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Photos from './components/Photos'
import Videos from './components/Videos'
import Commissions from './components/Commissions'
import Contact from './components/Contact'
import CV from './components/CV'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Footer/>
      <Home/>
      <Photos/>
      <Videos/>
      <Commissions/>
      <Contact/>
      <CV/>
    </>
  )
}

export default App

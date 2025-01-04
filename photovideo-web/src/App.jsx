import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Photos from './components/Photos'
import Videos from './components/Videos'
import Commissions from './components/Commissions'
import Contact from './components/Contact'
import CV from './components/Cv'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
                      Nav Bar Test
                      <div className="container-fluid">
                          <a className="navbar-brand" href="#">Hannah Price</a>
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                          </button>
                          <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">
                                  <li className="nav-item">
                                      <a className="nav-link active" aria-current="page" href="#">Photos</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#">Videos</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#">CV</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link disabled" aria-disabled="true">Contact</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
     
    </>
  )
}

export default App

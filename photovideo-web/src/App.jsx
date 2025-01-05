// import { useState } from 'react'
import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Photos from './components/Photos'
import Videos from './components/Videos'
import Commissions from './components/Commissions'
import Contact from './components/Contact'
import CV from './components/Cv'
import NavigateSite from './components/navigate'
import './App.css'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <html>
                <head>
                    <script src="http://localhost:5173"></script>
                </head>
               <Navbar/>
               <Home/>
               <Photos/>
               <Videos/>
               <Commissions/>
               <Contact/>
               <CV/>
               <NavigateSite/>

            </html>
        </>
    )
}

export default App

import React from 'react'
import About from './Components/About'
import Footer from './Components/Footer'
import Info from './Components/Info'
import Interests from './Components/Interests'
import './index.css'

export default function App() {
    return (
        <div className='container'>
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

const App = () => {

  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />

    </main>
  )
}

export default App

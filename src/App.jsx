import { useState } from 'react'
import Header from './components/header/header'
import './App.scss'
import Navbar from './components/navbar/Navbar'
function App() {

  return (
    <>
      <Header />
      <div>
        <Navbar/>
      </div>
    </>
  )
}

export default App

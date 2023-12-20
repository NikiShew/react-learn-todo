import { useState } from 'react'
import Header from './components/header/header'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import WorkSection from './components/work-section/WorkSection'
function App() {



  return (
    <>
      <Header />
      <div className='workSections'>
        <Navbar className='navbar'/>
        <WorkSection className='workSection'/>
      </div>
    </>
  )
}

export default App

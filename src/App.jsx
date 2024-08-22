import { useState } from 'react'
import './App.css'
import Navbarnav from './components/Navbarnav'
import AllRoutes from './routes/AllRoutes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbarnav />
      <AllRoutes />
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Men from '../pages/Men'
import Women from '../pages/Women'
import Kids from '../pages/Kids'
import Home_Living from '../pages/Home_Living'
import Beauty from '../pages/Beauty'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/mens' element={<Men/>}></Route>
            <Route path='/womens' element={<Women/>}></Route>
            <Route path='/kids' element={<Kids/>}></Route>
            <Route path='/home_living' element={<Home_Living/>}></Route>
            <Route path='/beauty' element={<Beauty/>}></Route>
            <Route path='/studio' element={<h1>STUDIO</h1>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
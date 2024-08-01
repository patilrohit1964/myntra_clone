import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Kids from '../pages/Kids';
import Home_Living from '../pages/Home_Living';
import Beauty from '../pages/Beauty';
import ListProduct from '../pages/ListProduct';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Privatecomp from '../private/Privatecomp';
import Bag from '../pages/Bag';
import WishList from '../pages/WishList';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mens' element={<Men />}></Route>
        <Route path='/womens' element={<Women />}></Route>
        <Route path='/kids' element={<Kids />}></Route>
        <Route path='/home_living' element={<Home_Living />}></Route>
        <Route path='/beauty' element={<Beauty />}></Route>
        <Route path='/listProduct/:category' element={<ListProduct />}></Route>
        <Route path='/prDetail/:id' element={<ProductDetails />}></Route>
        <Route element={<Privatecomp />}>
          <Route path='/bag' element={<Bag />}></Route>
          <Route path='/wishlist' element={<WishList />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/*' element={<h1 className='text-center mt-5 p-5'>Page not Found Enter valid Url</h1>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
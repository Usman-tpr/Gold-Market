import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home Page/Home'
import Sell from './Components/Sell'
import Register from './Components/Register'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import SingleProduct from './Components/SingleProduct'
import Buy from './pages/Buy Page/Buy'
// import Test from './Components/Test'


const App = () => {
  return (
    <div>

  <Routes>
    {/* <Route path='/test' element={<Test/>} /> */}
   <Route path='/' element={<Home/>} />
   <Route path='/category' element={<Home/>} />
   <Route path='/sell' element={<Sell />} />
   <Route path='/register' element={<Register />} />
   <Route path='/login' element={<Login />} />
   <Route path='/dashboard' element={<Dashboard />} />
   <Route path='/all-product/:slug' element={<SingleProduct />} />
   <Route path='/buy/:slug' element={<Buy />} />

  </Routes>

    </div>
  )
}

export default App
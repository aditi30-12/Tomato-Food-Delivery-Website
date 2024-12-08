import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'


const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Order' element={<Placeorder/>}/>
      </Routes>

      </div>
      <footer/>
    </>
    
  )
}

export default App
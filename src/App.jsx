import { Routes ,Route } from 'react-router'
import { Homepage } from './pages/Homepage'
import {Checkoutpage } from './pages/Checkoutpage'
import { Orderspage } from './pages/Orderspage'
import { Trackingpage } from './pages/Trackingpage'

import './App.css'

function App() {


  return (
    
    <Routes> 
      <Route path="/" element={<Homepage />}> </Route>
      <Route path='/checkout' element={<Checkoutpage />}> </Route>
      <Route path='/orders' element={<Orderspage />}> </Route>
      <Route path='/tracking' element={<Trackingpage />}> </Route>
    </Routes>

     
    
  )
}

export default App

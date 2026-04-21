import { Routes ,Route } from 'react-router'
import { Homepage } from './pages/Homepage'
import {Checkoutpage } from './pages/Checkoutpage'

import './App.css'

function App() {


  return (
    
    <Routes> 
      <Route path="/" element={<Homepage />}> </Route>
      <Route path='/checkout' element={<Checkoutpage />}> </Route>
    </Routes>

     
    
  )
}

export default App

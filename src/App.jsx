import { Routes ,Route } from 'react-router'
import { Homepage } from './pages/Homepage'

import './App.css'

function App() {


  return (
    
    <Routes> 
      <Route path="/" element={<Homepage />}> </Route>
      <Route path='/checkout' element={<h1>Checkout</h1>}> </Route>
    </Routes>

     
    
  )
}

export default App

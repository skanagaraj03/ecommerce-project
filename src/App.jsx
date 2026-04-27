import { Routes ,Route } from 'react-router'
import { Homepage } from './pages/Homepage'
import {Checkoutpage } from './pages/Checkoutpage'
import { Orderspage } from './pages/Orderspage'
import { Trackingpage } from './pages/Trackingpage'
import axios from 'axios';
import { useEffect,useState } from 'react';


import './App.css'

function App() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
 
  axios.get("http://localhost:3000/api/cart-items")
    .then((response) => {
        setCartItems(response.data);
    });
  }, []);


  return (
    
    <Routes> 
      <Route path="/" element={<Homepage cartItems={cartItems} />}> </Route>
      <Route path='/checkout' element={<Checkoutpage cartItems={cartItems} />}> </Route>
      <Route path='/orders' element={<Orderspage />}> </Route>
      <Route path='/tracking' element={<Trackingpage />}> </Route>
    </Routes>

     
    
  )
}

export default App

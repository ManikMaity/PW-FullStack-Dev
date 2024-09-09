
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { CurrencyContext } from './context/CusrrencyContext';
import Routing from './Components/Routing/Routing';

function App() {
  
  let [currency, setCurrency] = useState("usd");

  return (
    <>
    <CurrencyContext.Provider value={{currency, setCurrency}}>
      <Routing/>
    </CurrencyContext.Provider>
    </>
  )
}

export default App

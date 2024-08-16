
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { CurrencyContext } from './context/CusrrencyContext';

function App() {
  
  let [currency, setCurrency] = useState("usd");

  return (
    <>
    <CurrencyContext.Provider value={{currency, setCurrency}}>
      <Home/>
    </CurrencyContext.Provider>
    </>
  )
}

export default App

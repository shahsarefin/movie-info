import { useState } from 'react'
import {Header } from './components/Header';
import {Footer} from './components/Footer';
import {AllRoutes} from './routes/AllRoutes';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App

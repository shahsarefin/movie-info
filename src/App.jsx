import { useState } from 'react'
import {AllRoutes} from './routes/AllRoutes';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllRoutes />
    </>
  )
}

export default App

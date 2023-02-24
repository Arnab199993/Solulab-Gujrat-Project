import { useState } from 'react'

import './App.css'
import FrontPage from './Components/FrontPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FrontPage />

    </div>
  )
}

export default App

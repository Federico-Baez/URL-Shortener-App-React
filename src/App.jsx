import { useState } from 'react'
import './App.css'
import PageContainer from './components/containers/PageContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PageContainer />
    </div>
  )
}

export default App

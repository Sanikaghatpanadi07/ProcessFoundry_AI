import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState('Checking backend...')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/health')
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status)
      })
      .catch(() => {
        setStatus('Backend connection failed')
      })
  }, [])

  return (
    <div>
      <h1>ProcessFoundry AI</h1>
      <h2>Backend Status</h2>
      <p>{status}</p>
    </div>
  )
}

export default App
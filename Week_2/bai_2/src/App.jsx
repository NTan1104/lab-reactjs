import './App.css'
import Button from './components/Button'

function App() {
  return (
    <div className='btn-group'>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
    </div>
  )
}

export default App
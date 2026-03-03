import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import StudentInfo from './components/StudentInfo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <StudentInfo name="Nguyễn Tân" id="22727721" class="KHMT18BTT"></StudentInfo>
      <Footer></Footer>
    </>
  )
}

export default App

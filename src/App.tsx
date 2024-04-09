import './App.css'
import { Navbar } from './components/navbar'
import { Header } from './components/header'
import { HomePage } from './pages/homePage'
import { Footer } from './components/footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App

import './App.css'
import { Navbar } from './components/navbar'
import { Header } from './components/header'
import { HomePage } from './pages/homePage'
import { Footer } from './components/footer'
import { Drawer } from './components/drawer'

function App() {
  return (
    <div>
      <Drawer/>
      <Navbar/>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App

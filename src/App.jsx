import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Contact from './pages/contact'
import './App.css'

function App() {


  return (
  <BrowserRouter>
  <nav className='flex gap-[10px] font-bold justify-center bg-red-950 text-white p-[10px] rounded-sm w-full'>
    <Link to="/" className='font-bold hover:text-red-700'>Home</Link>
    <Link to="/about us" className='font-bold hover:text-red-700'>About us</Link>
    <Link to="/contact " className='font-bold hover:text-red-700'>Contact</Link>
  </nav>
  <div className=''>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about us' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

  </div>
  </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './Blog/Blog'
import Home from './Home/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </BrowserRouter>
     {/* <Home /> */}
    </>
  )
}

export default App

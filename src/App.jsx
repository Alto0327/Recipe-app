import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import  Header from "./Layout/Header"
import HomePage from './Pages/HomePage/HomePage'
import Footer from './Layout/Footer'
import SearchPage from './Pages/Search Recipie/SearchPage'
import Results from './Pages/Search Recipie/Results'

function App() {
  return (
    <BrowserRouter>
    <div className="gradient-background">
      <Header/>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/Home' element={<HomePage/>} />
        <Route path='/Search' element={<SearchPage/>} />
        <Route path='/results' element={<Results/>} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App

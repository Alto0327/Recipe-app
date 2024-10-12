import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import  Header from "./Layout/Header"
import HomePage from './Pages/HomePage/HomePage'
import Footer from './Layout/Footer'
import SearchPage from './Pages/Search Recipie/SearchPage'
import Results from './Pages/Search Recipie/Results'
import RecipeInfoPage from './Pages/Search Recipie/RecipeInfoPage'
import ScrollToTop from './Pages/ScrollToTop'

//TODO: Implement an Login to save recipes? 
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <div className="gradient-background">
      <Header/>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/Home' element={<HomePage/>} />
        <Route path='/Search' element={<SearchPage/>} />
        <Route path='/results' element={<Results/>} />
        <Route path="/recipe/:id" element={<RecipeInfoPage />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App

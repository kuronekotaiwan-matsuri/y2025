import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'

import Home from './pages/home'
import About from './pages/about'
import ContactUs from './pages/contact-us'
import FoodDrinkGuide from './pages/food-drink-guide'
import Shops from './pages/shops'
import Stamp from './pages/stamp'
import Member from './pages/member'
import './App.css'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/food-drink-guide" element={<FoodDrinkGuide />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/stamp" element={<Stamp />} />
        <Route path="/member" element={<Member />} />
      </Routes>
    </Router>
  )
}

export default App

//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'

import Home from './pages/home'
import About from './pages/about'
import ContactUs from './pages/contact-us'
import FoodDrinkGuide from './pages/food-drink-guide'
import Shops from './pages/shops'

import usePageTracking from './utilities/usePageTracking'

import './App.css'


// usePageTrackingを使うための中間コンポーネント
const PageTracker = () => {
  usePageTracking();
  return null;
};

function App() {
  return (
    <Router>
      <PageTracker />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/food-drink-guide" element={<FoodDrinkGuide />} />
        <Route path="/shops" element={<Shops />} />
      </Routes>
    </Router>
  )
}

export default App

import React, { useState } from 'react';
import './App.css';
import Nav from './components/nav'
import Home from './components/home'
import Products from './components/products'
import Contact from './components/contact'
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNavOpen = () => {
    setNavOpen(prev => !prev)
  }

  const [navSmall, setNavSmall] = useState(false)

  const NavSmall = () => {
    setNavSmall(true)
  }

  const NavBig = () => {
    setNavSmall(false)
  }

  return (
    <div className="App">
      <div className="flex flex-horizontal">
        <Router>
          <Nav 
            navOpen={navOpen}
            setNavOpen={setNavOpen}
            toggleNavOpen={toggleNavOpen}
            navSmall={navSmall}
            setNavSmall={setNavSmall}
            NavSmall={NavSmall}
            NavBig={NavBig}
          />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/products' element={ <Products /> } />
            <Route path='/contact' element={ <Contact /> } />
          </Routes>
        </Router>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import NotFound from './pages/NotFound'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="navbar">
          <div className="navbar-container">
            <a href="/" className="logo">🚗 CarShowroom</a>
            <nav className="nav-links">
              <a href="/">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2026 CarShowroom. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App

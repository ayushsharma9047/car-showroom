import { useState, useMemo } from 'react'
import CarList from '../components/CarList'
import SearchBar from '../components/SearchBar'
import FilterPanel from '../components/FilterPanel'
import '../styles/Home.css'

// Sample car data (will be replaced with API calls)
const SAMPLE_CARS = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2023, price: 25000, image: 'https://via.placeholder.com/300x200?text=Toyota+Camry', specs: 'Sedan, 4 cylinders, 203 hp' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2023, price: 22000, image: 'https://via.placeholder.com/300x200?text=Honda+Civic', specs: 'Sedan, 4 cylinders, 180 hp' },
  { id: 3, make: 'BMW', model: 'X5', year: 2023, price: 55000, image: 'https://via.placeholder.com/300x200?text=BMW+X5', specs: 'SUV, 6 cylinders, 335 hp' },
  { id: 4, make: 'Tesla', model: 'Model 3', year: 2023, price: 45000, image: 'https://via.placeholder.com/300x200?text=Tesla+Model+3', specs: 'Electric, 0-60 in 5.1s' },
  { id: 5, make: 'Ford', model: 'F-150', year: 2023, price: 35000, image: 'https://via.placeholder.com/300x200?text=Ford+F-150', specs: 'Pickup, 8 cylinders, 400 hp' },
  { id: 6, make: 'Audi', model: 'A4', year: 2023, price: 42000, image: 'https://via.placeholder.com/300x200?text=Audi+A4', specs: 'Sedan, 4 cylinders, 201 hp' },
  { id: 7, make: 'Mercedes', model: 'C-Class', year: 2023, price: 48000, image: 'https://via.placeholder.com/300x200?text=Mercedes+C-Class', specs: 'Sedan, 4 cylinders, 255 hp' },
  { id: 8, make: 'Hyundai', model: 'Elantra', year: 2023, price: 20000, image: 'https://via.placeholder.com/300x200?text=Hyundai+Elantra', specs: 'Sedan, 4 cylinders, 147 hp' },
]

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({ make: '', year: '', minPrice: 0, maxPrice: 100000 })

  const filteredCars = useMemo(() => {
    return SAMPLE_CARS.filter(car => {
      const matchesSearch = car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.model.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesMake = filters.make === '' || car.make === filters.make
      const matchesYear = filters.year === '' || car.year.toString() === filters.year
      const matchesPrice = car.price >= filters.minPrice && car.price <= filters.maxPrice

      return matchesSearch && matchesMake && matchesYear && matchesPrice
    })
  }, [searchTerm, filters])

  return (
    <div className="home">
      <div className="hero">
        <h1>Find Your Dream Car</h1>
        <p>Browse our collection of premium vehicles</p>
      </div>

      <div className="home-container">
        <aside className="sidebar">
          <FilterPanel filters={filters} setFilters={setFilters} cars={SAMPLE_CARS} />
        </aside>

        <main className="main-content">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="results-info">
            <p>Found {filteredCars.length} car(s)</p>
          </div>
          <CarList cars={filteredCars} />
        </main>
      </div>
    </div>
  )
}

export default Home

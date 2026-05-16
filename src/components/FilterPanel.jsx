import '../styles/FilterPanel.css'

function FilterPanel({ filters, setFilters, cars }) {
  const uniqueMakes = [...new Set(cars.map(car => car.make))].sort()
  const uniqueYears = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a)
  const maxPrice = Math.max(...cars.map(car => car.price))

  const handleMakeChange = (e) => {
    setFilters({ ...filters, make: e.target.value })
  }

  const handleYearChange = (e) => {
    setFilters({ ...filters, year: e.target.value })
  }

  const handlePriceChange = (e) => {
    setFilters({ ...filters, maxPrice: parseInt(e.target.value) })
  }

  const handleMinPriceChange = (e) => {
    setFilters({ ...filters, minPrice: parseInt(e.target.value) })
  }

  const handleReset = () => {
    setFilters({ make: '', year: '', minPrice: 0, maxPrice: maxPrice })
  }

  return (
    <div className="filter-panel">
      <h2>Filters</h2>

      <div className="filter-group">
        <label htmlFor="make">Make:</label>
        <select id="make" value={filters.make} onChange={handleMakeChange}>
          <option value="">All Makes</option>
          {uniqueMakes.map(make => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="year">Year:</label>
        <select id="year" value={filters.year} onChange={handleYearChange}>
          <option value="">All Years</option>
          {uniqueYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Price Range:</label>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={handleMinPriceChange}
            className="price-input"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={handlePriceChange}
            className="price-input"
          />
        </div>
      </div>

      <div className="filter-group">
        <input
          type="range"
          min="0"
          max={maxPrice}
          value={filters.maxPrice}
          onChange={handlePriceChange}
          className="price-slider"
        />
        <p className="price-display">Max: ${filters.maxPrice.toLocaleString()}</p>
      </div>

      <button onClick={handleReset} className="reset-btn">Reset Filters</button>
    </div>
  )
}

export default FilterPanel

import { FiSearch } from 'react-icons/fi'
import '../styles/SearchBar.css'

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by make or model (e.g., Toyota, Camry)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  )
}

export default SearchBar

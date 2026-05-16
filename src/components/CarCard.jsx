import { Link } from 'react-router-dom'
import '../styles/CarCard.css'

function CarCard({ car }) {
  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.image} alt={`${car.make} ${car.model}`} />
        <div className="year-badge">{car.year}</div>
      </div>
      <div className="car-info">
        <h3>{car.make} {car.model}</h3>
        <p className="specs">{car.specs}</p>
        <p className="price">${car.price.toLocaleString()}</p>
        <Link to={`/car/${car.id}`} className="view-details">View Details →</Link>
      </div>
    </div>
  )
}

export default CarCard

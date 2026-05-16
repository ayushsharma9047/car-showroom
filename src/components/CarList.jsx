import CarCard from './CarCard'
import '../styles/CarList.css'

function CarList({ cars }) {
  if (cars.length === 0) {
    return (
      <div className="car-list empty">
        <p>No cars found matching your criteria. Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}

export default CarList

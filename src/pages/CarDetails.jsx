import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import '../styles/CarDetails.css'

const SAMPLE_CARS = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2023, price: 25000, image: 'https://via.placeholder.com/600x400?text=Toyota+Camry', specs: 'Sedan, 4 cylinders, 203 hp', color: 'Silver', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2023, price: 22000, image: 'https://via.placeholder.com/600x400?text=Honda+Civic', specs: 'Sedan, 4 cylinders, 180 hp', color: 'Blue', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 3, make: 'BMW', model: 'X5', year: 2023, price: 55000, image: 'https://via.placeholder.com/600x400?text=BMW+X5', specs: 'SUV, 6 cylinders, 335 hp', color: 'Black', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 4, make: 'Tesla', model: 'Model 3', year: 2023, price: 45000, image: 'https://via.placeholder.com/600x400?text=Tesla+Model+3', specs: 'Electric, 0-60 in 5.1s', color: 'White', transmission: 'Automatic', fuel: 'Electric', mileage: '0 miles' },
  { id: 5, make: 'Ford', model: 'F-150', year: 2023, price: 35000, image: 'https://via.placeholder.com/600x400?text=Ford+F-150', specs: 'Pickup, 8 cylinders, 400 hp', color: 'Red', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 6, make: 'Audi', model: 'A4', year: 2023, price: 42000, image: 'https://via.placeholder.com/600x400?text=Audi+A4', specs: 'Sedan, 4 cylinders, 201 hp', color: 'Gray', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 7, make: 'Mercedes', model: 'C-Class', year: 2023, price: 48000, image: 'https://via.placeholder.com/600x400?text=Mercedes+C-Class', specs: 'Sedan, 4 cylinders, 255 hp', color: 'Black', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 8, make: 'Hyundai', model: 'Elantra', year: 2023, price: 20000, image: 'https://via.placeholder.com/600x400?text=Hyundai+Elantra', specs: 'Sedan, 4 cylinders, 147 hp', color: 'White', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
]

function CarDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const car = SAMPLE_CARS.find(c => c.id === parseInt(id))

  if (!car) {
    return (
      <div className="car-details">
        <button className="back-btn" onClick={() => navigate('/')}>
          <FiArrowLeft /> Back to Home
        </button>
        <div className="not-found">Car not found</div>
      </div>
    )
  }

  return (
    <div className="car-details">
      <button className="back-btn" onClick={() => navigate('/')}>
        <FiArrowLeft /> Back to Home
      </button>

      <div className="details-container">
        <div className="image-section">
          <img src={car.image} alt={`${car.make} ${car.model}`} />
        </div>

        <div className="info-section">
          <h1>{car.make} {car.model}</h1>
          <p className="year">{car.year}</p>
          <p className="price">${car.price.toLocaleString()}</p>

          <div className="specifications">
            <h2>Specifications</h2>
            <div className="spec-grid">
              <div className="spec-item">
                <span className="label">Type:</span>
                <span className="value">{car.specs}</span>
              </div>
              <div className="spec-item">
                <span className="label">Color:</span>
                <span className="value">{car.color}</span>
              </div>
              <div className="spec-item">
                <span className="label">Transmission:</span>
                <span className="value">{car.transmission}</span>
              </div>
              <div className="spec-item">
                <span className="label">Fuel Type:</span>
                <span className="value">{car.fuel}</span>
              </div>
              <div className="spec-item">
                <span className="label">Mileage:</span>
                <span className="value">{car.mileage}</span>
              </div>
            </div>
          </div>

          <div className="actions">
            <button className="btn btn-primary">Schedule Test Drive</button>
            <button className="btn btn-secondary">Contact Seller</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetails

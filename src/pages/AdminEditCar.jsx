import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import '../styles/AdminForm.css'

const SAMPLE_CARS = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2023, price: 25000, image: 'https://via.placeholder.com/300x200?text=Toyota+Camry', specs: 'Sedan, 4 cylinders, 203 hp', color: 'Silver', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2023, price: 22000, image: 'https://via.placeholder.com/300x200?text=Honda+Civic', specs: 'Sedan, 4 cylinders, 180 hp', color: 'Blue', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 3, make: 'BMW', model: 'X5', year: 2023, price: 55000, image: 'https://via.placeholder.com/300x200?text=BMW+X5', specs: 'SUV, 6 cylinders, 335 hp', color: 'Black', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 4, make: 'Tesla', model: 'Model 3', year: 2023, price: 45000, image: 'https://via.placeholder.com/300x200?text=Tesla+Model+3', specs: 'Electric, 0-60 in 5.1s', color: 'White', transmission: 'Automatic', fuel: 'Electric', mileage: '0 miles' },
  { id: 5, make: 'Ford', model: 'F-150', year: 2023, price: 35000, image: 'https://via.placeholder.com/300x200?text=Ford+F-150', specs: 'Pickup, 8 cylinders, 400 hp', color: 'Red', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 6, make: 'Audi', model: 'A4', year: 2023, price: 42000, image: 'https://via.placeholder.com/300x200?text=Audi+A4', specs: 'Sedan, 4 cylinders, 201 hp', color: 'Gray', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
]

const MAKES = ['Toyota', 'Honda', 'BMW', 'Tesla', 'Ford', 'Audi', 'Mercedes', 'Hyundai']
const COLORS = ['White', 'Black', 'Silver', 'Gray', 'Blue', 'Red', 'Green', 'Yellow']
const TRANSMISSIONS = ['Automatic', 'Manual']
const FUEL_TYPES = ['Gasoline', 'Diesel', 'Electric', 'Hybrid']

function AdminEditCar() {
  const { id } = useParams()
  const navigate = useNavigate()
  const car = SAMPLE_CARS.find(c => c.id === parseInt(id))

  const [formData, setFormData] = useState(car || {
    make: '',
    model: '',
    year: new Date().getFullYear(),
    price: '',
    image: '',
    specs: '',
    color: '',
    transmission: '',
    fuel: '',
    mileage: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'year' ? (value ? parseInt(value) : '') : value
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.make.trim()) newErrors.make = 'Make is required'
    if (!formData.model.trim()) newErrors.model = 'Model is required'
    if (!formData.year) newErrors.year = 'Year is required'
    if (!formData.price || formData.price <= 0) newErrors.price = 'Valid price is required'
    if (!formData.color) newErrors.color = 'Color is required'
    if (!formData.transmission) newErrors.transmission = 'Transmission is required'
    if (!formData.fuel) newErrors.fuel = 'Fuel type is required'
    if (!formData.specs.trim()) newErrors.specs = 'Specifications are required'
    if (!formData.image.trim()) newErrors.image = 'Image URL is required'
    if (!formData.mileage.trim()) newErrors.mileage = 'Mileage is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitted(true)
    setTimeout(() => {
      navigate('/admin')
    }, 1500)
  }

  if (!car) {
    return (
      <div className="admin-form">
        <button className="back-btn" onClick={() => navigate('/admin')}>
          <FiArrowLeft /> Back to Dashboard
        </button>
        <div className="not-found">Car not found</div>
      </div>
    )
  }

  return (
    <div className="admin-form">
      <button className="back-btn" onClick={() => navigate('/admin')}>
        <FiArrowLeft /> Back to Dashboard
      </button>

      <div className="form-container">
        <div className="form-header">
          <h1>Edit Car</h1>
          <p>Update the car details below</p>
        </div>

        {submitted && (
          <div className="success-message">
            ✓ Car updated successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="car-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="make">Make *</label>
              <select
                id="make"
                name="make"
                value={formData.make}
                onChange={handleChange}
                className={errors.make ? 'error' : ''}
              >
                <option value="">Select Make</option>
                {MAKES.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
              {errors.make && <span className="error-text">{errors.make}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="model">Model *</label>
              <input
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g., Camry, Civic"
                className={errors.model ? 'error' : ''}
              />
              {errors.model && <span className="error-text">{errors.model}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="year">Year *</label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                min="1990"
                max={new Date().getFullYear()}
                className={errors.year ? 'error' : ''}
              />
              {errors.year && <span className="error-text">{errors.year}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="price">Price ($) *</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0"
                min="0"
                className={errors.price ? 'error' : ''}
              />
              {errors.price && <span className="error-text">{errors.price}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="color">Color *</label>
              <select
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className={errors.color ? 'error' : ''}
              >
                <option value="">Select Color</option>
                {COLORS.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
              {errors.color && <span className="error-text">{errors.color}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="transmission">Transmission *</label>
              <select
                id="transmission"
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className={errors.transmission ? 'error' : ''}
              >
                <option value="">Select Transmission</option>
                {TRANSMISSIONS.map(trans => (
                  <option key={trans} value={trans}>{trans}</option>
                ))}
              </select>
              {errors.transmission && <span className="error-text">{errors.transmission}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fuel">Fuel Type *</label>
              <select
                id="fuel"
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
                className={errors.fuel ? 'error' : ''}
              >
                <option value="">Select Fuel Type</option>
                {FUEL_TYPES.map(fuel => (
                  <option key={fuel} value={fuel}>{fuel}</option>
                ))}
              </select>
              {errors.fuel && <span className="error-text">{errors.fuel}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mileage">Mileage *</label>
              <input
                type="text"
                id="mileage"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                placeholder="e.g., 0 miles"
                className={errors.mileage ? 'error' : ''}
              />
              {errors.mileage && <span className="error-text">{errors.mileage}</span>}
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="specs">Specifications *</label>
            <textarea
              id="specs"
              name="specs"
              value={formData.specs}
              onChange={handleChange}
              placeholder="e.g., Sedan, 4 cylinders, 203 hp"
              rows="3"
              className={errors.specs ? 'error' : ''}
            ></textarea>
            {errors.specs && <span className="error-text">{errors.specs}</span>}
          </div>

          <div className="form-group full-width">
            <label htmlFor="image">Image URL *</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className={errors.image ? 'error' : ''}
            />
            {errors.image && <span className="error-text">{errors.image}</span>}
            {formData.image && (
              <div className="image-preview">
                <img src={formData.image} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
              </div>
            )}
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => navigate('/admin')} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update Car
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminEditCar

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi'
import '../styles/AdminDashboard.css'

const SAMPLE_CARS = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2023, price: 25000, image: 'https://via.placeholder.com/300x200?text=Toyota+Camry', specs: 'Sedan, 4 cylinders, 203 hp', color: 'Silver', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2023, price: 22000, image: 'https://via.placeholder.com/300x200?text=Honda+Civic', specs: 'Sedan, 4 cylinders, 180 hp', color: 'Blue', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 3, make: 'BMW', model: 'X5', year: 2023, price: 55000, image: 'https://via.placeholder.com/300x200?text=BMW+X5', specs: 'SUV, 6 cylinders, 335 hp', color: 'Black', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 4, make: 'Tesla', model: 'Model 3', year: 2023, price: 45000, image: 'https://via.placeholder.com/300x200?text=Tesla+Model+3', specs: 'Electric, 0-60 in 5.1s', color: 'White', transmission: 'Automatic', fuel: 'Electric', mileage: '0 miles' },
  { id: 5, make: 'Ford', model: 'F-150', year: 2023, price: 35000, image: 'https://via.placeholder.com/300x200?text=Ford+F-150', specs: 'Pickup, 8 cylinders, 400 hp', color: 'Red', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
  { id: 6, make: 'Audi', model: 'A4', year: 2023, price: 42000, image: 'https://via.placeholder.com/300x200?text=Audi+A4', specs: 'Sedan, 4 cylinders, 201 hp', color: 'Gray', transmission: 'Automatic', fuel: 'Gasoline', mileage: '0 miles' },
]

function AdminDashboard() {
  const [cars, setCars] = useState(SAMPLE_CARS)
  const [searchTerm, setSearchTerm] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const navigate = useNavigate()

  const filteredCars = cars.filter(car =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (id) => {
    setCars(cars.filter(car => car.id !== id))
    setDeleteConfirm(null)
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Manage your car inventory</p>
        </div>
        <Link to="/admin/add" className="btn btn-primary">
          <FiPlus /> Add New Car
        </Link>
      </div>

      <div className="admin-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search cars by make or model..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <p className="results-count">{filteredCars.length} car(s) found</p>
        </div>

        {filteredCars.length === 0 ? (
          <div className="no-results">
            <p>No cars found. Start by adding a new car!</p>
            <Link to="/admin/add" className="btn btn-primary">Add Car</Link>
          </div>
        ) : (
          <div className="cars-table-wrapper">
            <table className="cars-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Price</th>
                  <th>Color</th>
                  <th>Fuel Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCars.map(car => (
                  <tr key={car.id}>
                    <td>#{car.id}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.year}</td>
                    <td>${car.price.toLocaleString()}</td>
                    <td>{car.color}</td>
                    <td>{car.fuel}</td>
                    <td>
                      <div className="action-buttons">
                        <Link
                          to={`/admin/edit/${car.id}`}
                          className="btn-icon edit"
                          title="Edit"
                        >
                          <FiEdit2 />
                        </Link>
                        <button
                          onClick={() => setDeleteConfirm(car.id)}
                          className="btn-icon delete"
                          title="Delete"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {deleteConfirm && (
        <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Delete Car</h2>
            <p>Are you sure you want to delete this car? This action cannot be undone.</p>
            <div className="modal-actions">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard

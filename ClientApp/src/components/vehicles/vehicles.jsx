import React from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import {useState, useEffect} from 'react'
import VehicleCard from '../vehicleCard/vehiclesCard'
import './vehicles.css'

const Vehicles = () => {
  const [vehiclesList, setVehiclesList] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    setShowSpinner(true)
    setTimeout(() => {
      axios('https://swapi.dev/api/vehicles/').then((vehicles) => {
        setVehiclesList(vehicles.data.results)
        setShowSpinner(false)
      })
    }, 0)
  }, [])
  console.log(vehiclesList)
  return (
    <div>
      {showSpinner && <Spinner animation="border" variant="light" />}

      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="vehiclesCards">
              {vehiclesList &&
                vehiclesList
                  //.slice(0, 3)
                  .map((vehicle) => (
                    <VehicleCard key={vehicle.name} vehicle={vehicle} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Vehicles

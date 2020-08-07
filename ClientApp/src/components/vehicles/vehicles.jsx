import React from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import {useState, useEffect} from 'react'
import VehicleCard from '../vehicleCard/vehiclesCard'
import './vehicles.css'
import Pager from '../pager'

const Vehicles = () => {
  const [vehiclesList, setVehiclesList] = useState(null)
  const [page, setPage] = useState(null)
  const [pageCount, setPageCount] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  useEffect(() => {
    if (!page) {
      axios('https://swapi.dev/api/vehicles/').then((vehicles) => {
        setVehiclesList(vehicles.data.results)
        setShowSpinner(false)
        setPageCount(vehicles.data.count)
      })
    } else {
      axios('https://swapi.dev/api/vehicles/?page=' + page).then((vehicles) => {
        setVehiclesList(vehicles.data.results)
        setShowSpinner(false)
      })
    }
  }, [page])

  // useEffect(() => {
  //   setShowSpinner(true)
  //   setTimeout(() => {
  //     axios('https://swapi.dev/api/vehicles/').then((vehicles) => {
  //       setVehiclesList(vehicles.data.results)
  //       setShowSpinner(false)
  //     })
  //   }, 0)
  // }, [])

  return (
    <div>
      {showSpinner && <Spinner animation="border" variant="light" />}
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="vehiclesCards">
              {vehiclesList &&
                vehiclesList.map((vehicle) => (
                  <VehicleCard key={vehicle.name} vehicle={vehicle} />
                ))}
            </div>
          </div>
        </div>
        <Pager
          count={pageCount}
          page1Count={10}
          onClick={(page) => setPage(page)}
        />
      </div>
    </div>
  )
}
export default Vehicles

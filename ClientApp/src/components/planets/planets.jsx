import React from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import './planets.css'
import {useState, useEffect} from 'react'
import PlanetCard from '../planetCard/planetCard'

const Planets = () => {
  const [planetList, setPlanetList] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  const [selectedPlanet, setSelectedPlanet] = useState(null)

  useEffect(() => {
    setShowSpinner(true)
    setTimeout(() => {
      axios('https://swapi.dev/api/planets/').then((planets) => {
        setPlanetList(planets.data.results)
        setShowSpinner(false)
      })
    }, 0)
  }, [])
  const handleClick = (event, planet) => {
    event.preventDefault()
    setSelectedPlanet(planet)
  }
  console.log(planetList)

  return (
    <div>
      {showSpinner && <Spinner animation="border" variant="light" />}
      {planetList && (
        <div className="main">
          <div className="caption">Planets</div>
          {planetList.map((planet) => (
            <div className="planets">
              <a
                key={planet.name}
                href="#"
                className="value"
                onClick={(event) => handleClick(event, planet)}
              >
                {planet.name}
                <br />
              </a>
              <div className="planetCard">
                {selectedPlanet && selectedPlanet.name === planet.name && (
                  <PlanetCard selectedPlanet={selectedPlanet} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Planets

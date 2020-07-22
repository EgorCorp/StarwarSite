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
    }, 1000)
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
        <div className="mainPlanet">
          <div className="header">Planets</div>
          {planetList.map((planet) => (
            <div>
              <a
                key={planet.name}
                href="#"
                onClick={(event) => handleClick(event, planet)}
              >
                {planet.name}
                <br />
              </a>
              <div>
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

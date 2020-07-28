import React from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import './planets.css'
import {useState, useEffect} from 'react'
import PlanetCard from '../planetCard/planetCard'
import Resident from '../resident/resident'
import Residents from '../residents/residents'

const Planets = () => {
  const [planetList, setPlanetList] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [clear, setClear] = useState(true)
  const [urls, setUrls] = useState(null)

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
    setUrls(null)
    setSelectedPlanet(planet)
  }
  //console.log(planetList)

  const showPlanet = () => {
    return (
      <PlanetCard
        selectedPlanet={selectedPlanet}
        onClickMore={(urls) => setUrls(urls)}
      />
    )
  }
  return (
    <div>
      {showSpinner && <Spinner animation="border" variant="light" />}
      {planetList && (
        <div className="main1">
          <div className="caption">Planets</div>
          <div className="planets">
            <div className="row">
              <div className="col-md">
                {planetList.map((planet) => (
                  <div key={planet.name} className="planet">
                    <a
                      href="#"
                      className="value"
                      onClick={(event) => handleClick(event, planet)}
                    >
                      {planet.name}
                    </a>
                  </div>
                ))}
              </div>
              <div className="col-md">
                <div className="planetCard">
                  {selectedPlanet && showPlanet()}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="residentCard">
              {urls && urls.length > 0 && <Residents urls={urls} />}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Planets

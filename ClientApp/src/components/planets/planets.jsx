import React from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import './planets.css'
import {useState, useEffect} from 'react'
import PlanetCard from '../planetCard/planetCard'
import Dependencies from '../dependencies/dependencies'
import Pager from '../pager'

const Planets = () => {
  const [planetList, setPlanetList] = useState(null)
  const [page, setPage] = useState(null)
  const [pageCount, setPageCount] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [urls, setUrls] = useState(null)
  const [filmUrls, setFilmUrls] = useState(null)

  useEffect(() => {
    setShowSpinner(true)

    if (!page) {
      axios('https://swapi.dev/api/planets/').then((planets) => {
        setPlanetList(planets.data.results)
        setShowSpinner(false)
        setPageCount(planets.data.count)
      })
    } else {
      axios('https://swapi.dev/api/planets/?page=' + page).then((planets) => {
        setPlanetList(planets.data.results)
        setSelectedPlanet(null)
        setUrls(null)
        setFilmUrls(null)
        setShowSpinner(false)
      })
    }
  }, [page])
  const handleClick = (event, planet) => {
    event.preventDefault()
    setUrls(null)
    setFilmUrls(null)
    setSelectedPlanet(planet)
  }

  const showPlanet = () => {
    return (
      <PlanetCard
        selectedPlanet={selectedPlanet}
        onClickMore={(urls) => setUrls(urls)}
        onClickFilm={(urls) => setFilmUrls(urls)}
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
          <Dependencies type="characters" urls={urls} />
          <Dependencies urls={filmUrls} type="films" />
        </div>
      )}
      <Pager
        count={pageCount}
        page1Count={10}
        onClick={(page) => setPage(page)}
      />
    </div>
  )
}
export default Planets

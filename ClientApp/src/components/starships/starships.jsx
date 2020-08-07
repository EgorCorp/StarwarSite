import React, {useEffect, useState, Fragment} from 'react'
import axios from 'axios'
import './starships.css'
import Spinner from 'react-bootstrap/Spinner'
import StarshipCard from '../starshipCard/starshipCard'
import Dependencies from '../dependencies/dependencies'
import Pager from '../pager'

const Starships = () => {
  const [starshipList, setStarshipList] = useState(null)
  const [starshipPage, setStarshipPage] = useState(null)
  const [selectedStarship, setSelectedStarship] = useState(null)
  const [starshipCount, setStarshipCount] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  const [pilotUrls, setPilotUrls] = useState(null)
  const [filmUrls, setFilmUrls] = useState(null)

  console.log(starshipList)

  useEffect(() => {
    setShowSpinner(true)

    //http://swapi.dev/api/starships/?page=2
    if (!starshipPage) {
      axios('https://swapi.dev/api/starships/').then((ships) => {
        setStarshipList(ships.data.results)
        setStarshipCount(ships.data.count)

        setShowSpinner(false)
      })
    } else {
      axios('https://swapi.dev/api/starships/?page=' + starshipPage).then(
        (ships) => {
          setStarshipList(ships.data.results)

          setShowSpinner(false)
        }
      )
    }
  }, [starshipPage])

  const handleStarshipImg = (event, ship) => {
    event.preventDefault()
    setPilotUrls(null)
    setFilmUrls(null)
    setSelectedStarship(ship)
  }

  const linkRender = (ship) => (
    <a
      href="#"
      className="value"
      onClick={(event) => handleStarshipImg(event, ship)}
    >
      {ship.name}
    </a>
  )

  const cardRender = () => (
    <div className="starshipCard">
      {selectedStarship && (
        <StarshipCard
          selectedShip={selectedStarship}
          onClickMore={(urls) => setPilotUrls(urls)}
          onClickFilm={(urls) => setFilmUrls(urls)}
        />
      )}
    </div>
  )

  return (
    <Fragment>
      {showSpinner && <Spinner animation="border" variant="light" />}
      {starshipList && (
        <div className="main">
          <div className="caption">Starships</div>
          <div className="starships">
            <div className="row">
              <div className="col-md">
                {starshipList.map((ship) => (
                  <div key={ship.name} className="starship">
                    {linkRender(ship)}
                  </div>
                ))}
              </div>

              <div className="col-md">{cardRender()}</div>
            </div>
          </div>
          <Dependencies type="characters" urls={pilotUrls} />
          <Dependencies urls={filmUrls} type="films" />
        </div>
      )}
      <Pager
        count={starshipCount}
        page1Count={10}
        onClick={(page) => setStarshipPage(page)}
      />
    </Fragment>
  )
}

export default Starships

import React, {useEffect, useState, Fragment} from 'react'
import axios from 'axios'
import './starships.css'
import Spinner from 'react-bootstrap/Spinner'
import StarshipCard from '../starshipCard/starshipCard'

const Starships = () => {
  const [starshipList, setStarshipList] = useState(null)

  const [selectedStarship, setSelectedStarship] = useState(null)

  const [showSpinner, setShowSpinner] = useState(false)
  // const [starshipImg, setStarshipImg] = useState(null)

  useEffect(() => {
    setShowSpinner(true)
    axios('https://swapi.dev/api/starships/').then((ships) => {
      setStarshipList(ships.data.results)
      setShowSpinner(false)
    })
  }, [])

  //if (starshipList) console.log(starshipList.url)

  const handleStarshipImg = (event, ship) => {
    event.preventDefault()
    console.log(ship)
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
      {selectedStarship && <StarshipCard selectedShip={selectedStarship} />}
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
        </div>
      )}
    </Fragment>
  )
}

export default Starships

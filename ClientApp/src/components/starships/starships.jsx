import React, {useEffect, useState, Fragment} from 'react'
import axios from 'axios'
import './starships.css'
import Spinner from 'react-bootstrap/Spinner'
import StarshipCard from '../starshipCard/starshipCard'

const Starships = () => {
  const [starshipList, setStarshipList] = useState(null)

  const [selectedStarship, setSelectedStarship] = useState({
    shipName: '',
  })

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

    setSelectedStarship({shipName: ship.name, fullInfo: ship})
  }

  return (
    <Fragment>
      {showSpinner && <Spinner animation="border" variant="light" />}
      {starshipList && (
        <div className="main">
          <div className="caption">Starships</div>
          {starshipList.map((ship) => (
            <div key={ship.name} className="starships">
              <a
                href="#"
                className="value"
                onClick={(event) => handleStarshipImg(event, ship)}
              >
                {ship.name}
              </a>
              <div className="starshipCard">
                {selectedStarship &&
                  selectedStarship.shipName === ship.name && (
                    <StarshipCard selectedShip={selectedStarship} />
                  )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  )
}

export default Starships

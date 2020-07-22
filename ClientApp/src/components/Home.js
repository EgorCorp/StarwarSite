import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './home.css'
import StarshipCard from './starshipCard/starshipCard'

const Home = () => {
  const [ships, setShips] = useState([])
  const [oneShip, setOneShip] = useState(null)

  useEffect(() => {
    axios('https://swapi.dev/api/starships/').then((shipsArr) => {
      setShips(shipsArr.data.results)
    })
  }, [])

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  useEffect(() => {
    if (!ships) return
    const index = getRandomInt(ships.length)
    const randomShip = ships[index]
    setOneShip(randomShip)
  }, [ships])

  const shipCard = () => (
    <div>
      {oneShip && (
        <StarshipCard
          selectedShip={{shipName: oneShip.name, fullInfo: oneShip}}
        />
      )}
    </div>
  )

  return (
    <div>
      <div className="home">HOME</div>
      <div className="item">
        <div>
          Starships
          {shipCard()}
        </div>
        <div>People{shipCard()}</div>
        <div>Planets{shipCard()}</div>
      </div>
    </div>
  )
}

export default Home

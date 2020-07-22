import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './home.css'
import StarshipCard from './starshipCard/starshipCard'
import PlanetCard from './planetCard/planetCard'

const Home = () => {
  const [ships, setShips] = useState([])
  const [oneShip, setOneShip] = useState(null)
  const [onePlanet, setOnePlanet] = useState(null)

  useEffect(() => {
    axios('https://swapi.dev/api/starships/').then((shipsArr) => {
      setShips(shipsArr.data.results)
    })
  }, [])

  useEffect(() => {
    axios('https://swapi.dev/api/planets/').then((planetArr) => {
      const planets = planetArr.data.results
      const index = getRandomInt(planets.length)
      const randomPlanet = planets[index]
      setOnePlanet(randomPlanet)
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

  const planetCard = () => (
    <div>{onePlanet && <PlanetCard selectedPlanet={onePlanet} />}</div>
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
        <div>Planets{planetCard()}</div>
      </div>
    </div>
  )
}

export default Home

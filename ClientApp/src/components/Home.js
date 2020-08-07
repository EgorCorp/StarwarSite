import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './home.css'
import StarshipCard from './starshipCard/starshipCard'
import PlanetCard from './planetCard/planetCard'
import PersonCard from './peopleCard/peopleCard'
import DependencyCircle from './dependencies/dependencyCircle'

const Home = () => {
  const [ships, setShips] = useState([])
  const [oneShip, setOneShip] = useState(null)
  const [onePlanet, setOnePlanet] = useState(null)
  const [onePerson, setOnePerson] = useState(null)

  useEffect(() => {
    axios('https://swapi.dev/api/starships/').then((shipsArr) => {
      setShips(shipsArr.data.results)
    })
  }, [])

  useEffect(() => {
    axios('https://swapi.dev/api/people/').then((personArr) => {
      const people = personArr.data.results
      const index = getRandomInt(people.length)
      const randomPerson = people[index]
      setOnePerson(randomPerson)
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
        <StarshipCard selectedShip={oneShip} hideDependencies={true} />
      )}
    </div>
  )

  const planetCard = () => (
    <div>
      {onePlanet && (
        <PlanetCard selectedPlanet={onePlanet} hideDependencies={true} />
      )}
    </div>
  )

  const personCard = () => (
    <div>
      {onePerson && <PersonCard person={onePerson} hideDependencies={true} />}
    </div>
  )

  return (
    <div>
      {/* <DependencyCircle
        imgUrl="https://opt-1031816.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/c33/750_400_1/c33dfb90268b89637fa1a78ea923848d.jpg?1528196410143742"
        name="Акиту_ин"
        size="50px"
      />
      <DependencyCircle
        imgUrl="https://opt-1031816.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/c33/750_400_1/c33dfb90268b89637fa1a78ea923848d.jpg?1528196410143742"
        name="Акиту_ин"
        size="75px"
      /> */}
      <div className="home">HOME</div>
      <div className="item">
        <div className="item2">
          Starships
          {shipCard()}
        </div>
        <div className="item2">People{personCard()}</div>
        <div className="item2">Planets{planetCard()}</div>
      </div>
    </div>
  )
}

export default Home

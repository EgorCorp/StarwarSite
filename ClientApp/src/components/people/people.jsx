import React from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import {useState, useEffect} from 'react'
import PersonCard from '../peopleCard/peopleCard'
import './people.css'
import Dependencies from '../dependencies/dependencies'

const People = () => {
  const [peopleList, setPeopleList] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState(null)
  const [homeUrls, setHomeUrls] = useState(null)
  const [vehicleUrls, setVehicleUrls] = useState(null)
  const [starshipUrls, setStarshipUrls] = useState(null)
  const [filmUrls, setFilmUrls] = useState(null)

  useEffect(() => {
    setShowSpinner(true)
    setTimeout(() => {
      axios('https://swapi.dev/api/people/').then((peoples) => {
        setPeopleList(peoples.data.results)
        setShowSpinner(false)
      })
    }, 0)
  }, [])
  const handleClick = (event, people) => {
    event.preventDefault()
    setHomeUrls(null)
    setStarshipUrls(null)
    setVehicleUrls(null)
    setFilmUrls(null)
    setSelectedPeople(people)
  }

  return (
    <div>
      {showSpinner && <Spinner animation="border" variant="light" />}
      {peopleList && (
        <div>
          <div className="caption">People</div>
          <div className="Peoples">
            <div className="row">
              <div className="col-md">
                {peopleList.map((people) => (
                  <div key={people.name} className="people">
                    <a
                      href="#"
                      className="value"
                      onClick={(event) => handleClick(event, people)}
                    >
                      {people.name}
                    </a>
                  </div>
                ))}
              </div>
              <div className="col-md">
                <div className="peopleCard">
                  {selectedPeople && (
                    <PersonCard
                      person={selectedPeople}
                      onClickHome={(urls) => setHomeUrls(urls)}
                      onClickVehicle={(urls) => setVehicleUrls(urls)}
                      onClickStarship={(urls) => setStarshipUrls(urls)}
                      onClickFilm={(urls) => setFilmUrls(urls)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <Dependencies urls={homeUrls} type="planets" />
          <Dependencies urls={vehicleUrls} type="vehicles" />
          <Dependencies urls={starshipUrls} type="starships" />
          <Dependencies urls={filmUrls} type="films" />
        </div>
      )}
    </div>
  )
}

export default People

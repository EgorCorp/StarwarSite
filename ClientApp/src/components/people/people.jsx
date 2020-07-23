import React from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import {useState, useEffect} from 'react'
import PersonCard from '../peopleCard/peopleCard'

const People = () => {
  const [peopleList, setPeopleList] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState(null)

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
    setSelectedPeople(people)
  }
  console.log(peopleList)

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
                  <div className="people">
                    <a
                      key={people.name}
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
                  {selectedPeople && <PersonCard person={selectedPeople} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default People

import React, {useState, useEffect, useRef} from 'react'
import Axios from 'axios'
import PeopleCard from '../peopleCard/peopleCard'

const toHttps = (url) => {
  return url.replace('http', 'https')
}

const Residents = ({urls, clear}) => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    if (!clear) return
    setPersons([])
    console.log('cleared')
  }, [clear])

  useEffect(() => {
    if (!urls) return

    let people = []

    for (let i = 0; i < urls.length; i++) {
      const personUrl = urls[i]
      Axios(toHttps(personUrl)).then((p) => {
        people.push(p.data)
      })
    }
    setTimeout(() => setPersons(people), 1000)
  }, [urls])

  const showCard = (person) => {
    return (
      <div key={person.name}>
        <PeopleCard person={person} />
      </div>
    )
  }

  return <div>{persons.map((person) => showCard(person))}</div>
}
export default Residents

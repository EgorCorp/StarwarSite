import React, {useState, useEffect, useRef} from 'react'
import Axios from 'axios'
import PeopleCard from '../peopleCard/peopleCard'
import Resident from '../resident/resident'
import './residents.css'

const Residents = ({urls}) => {
  // const [persons, setPersons] = useState([])

  // useEffect(() => {
  //   if (!urls) return

  //   let people = []

  //   for (let i = 0; i < urls.length; i++) {
  //     const personUrl = urls[i]
  //     Axios(toHttps(personUrl)).then((p) => {
  //       people.push(p.data)
  //     })
  //   }
  //   setTimeout(() => setPersons(people), 1000)
  // }, [urls])

  const showCard = (url) => {
    return (
      <div key={url}>
        <Resident url={url} />
      </div>
    )
  }

  return (
    <div className="residents">
      {urls && urls.length > 0 && urls.map((url) => showCard(url))}
    </div>
  )
}
export default Residents

import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import PeopleCard from '../peopleCard/peopleCard'
import {toHttps} from '../../utils/utils'

const Resident = ({url}) => {
  const [person, setPerson] = useState(null)
  useEffect(() => {
    Axios(toHttps(url)).then((p) => {
      setPerson(p.data)
    })
  }, [])

  return <div>{person && <PeopleCard person={person} />}</div>
}
export default Resident

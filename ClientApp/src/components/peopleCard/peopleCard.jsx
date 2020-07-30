import React from 'react'
import Card from 'react-bootstrap/Card'
import {FormatDateForView} from '../../utils/utils'
import DependencyButton from '../dependencies/dependencyButton'

const extractId = (url) => {
  const idRegExp = /\/([0-9]*)\/$/
  return url.match(idRegExp)[1]
}

const _imageBase = 'https://starwars-visualguide.com/assets/img'

const PersonCard = ({person, onClickHome, onClickVehicle}) => {
  const num = extractId(person.url)
  const url = _imageBase + '/characters/' + num + '.jpg'

  const handleHomeClick = (event) => {
    //
    if (onClickHome) onClickHome([person.homeworld])
  }
  const handleVehicleClick = (event) => {
    console.log(person.vehicles, 'person.vehicles')
    if (onClickVehicle) onClickVehicle(person.vehicles)
  }

  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>
          Birthday: {person.birth_year}
          <br />
          Created: {FormatDateForView(person.created)}
          <br />
          Edited: {FormatDateForView(person.edited)}
          <br />
          Eye color: {person.eye_color}
          <br />
          Gender: {person.gender}
          <br />
          Hair color: {person.hair_color}
          <br />
          Height: {person.height}
          <br />
          Mass: {person.mass}
          <br />
          Skin: {person.skin_color}
          <br />
          <DependencyButton
            urls={[person.homeworld]}
            label="Home"
            onClick={handleHomeClick}
          />
          <DependencyButton
            urls={person.vehicles}
            label="Vehicles"
            onClick={handleVehicleClick}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PersonCard
// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (4) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/"]
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "http://swapi.dev/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
// species: []
// starships: (2) ["http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/"]
// url: "http://swapi.dev/api/people/1/"
// vehicles: (2) ["http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/"]

import React from 'react'
import Card from 'react-bootstrap/Card'
// import './starshipCard.css'

const extractId = (url) => {
  const idRegExp = /\/([0-9]*)\/$/
  return url.match(idRegExp)[1]
}
const _imageBase = 'https://starwars-visualguide.com/assets/img'
const PlanetCard = ({selectedPlanet}) => {
  const num = extractId(selectedPlanet.url)
  const url = _imageBase + '/planets/' + num + '.jpg'

  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{selectedPlanet.name}</Card.Title>
        <Card.Text>
          {/* Climate: {selectedPlanet.climate}
          <br />
          Created: {selectedPlanet.}
          <br />
          : {selectedPlanet.}
          <br />
          : {selectedPlanet.}
          <br />
          : {selectedPlanet.}
          <br />
          : {selectedPlanet.}
          <br />
          : {selectedPlanet.}
          <br />
          : {selectedPlanet.}
          <br />
          : {selectedPlanet.}
          <br />
          : {selectedPlanet.}
          <br /> */}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default PlanetCard

// climate: "arid"
// created: "2014-12-09T13:50:49.641000Z"
// diameter: "10465"
// edited: "2014-12-20T20:58:18.411000Z"
// films: (5) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/4/", "http://swapi.dev/api/films/5/", "http://swapi.dev/api/films/6/"]
// gravity: "1 standard"
// name: "Tatooine"
// orbital_period: "304"
// population: "200000"
// residents: (10) ["http://swapi.dev/api/people/1/", "http://swapi.dev/api/people/2/", "http://swapi.dev/api/people/4/", "http://swapi.dev/api/people/6/", "http://swapi.dev/api/people/7/", "http://swapi.dev/api/people/8/", "http://swapi.dev/api/people/9/", "http://swapi.dev/api/people/11/", "http://swapi.dev/api/people/43/", "http://swapi.dev/api/people/62/"]
// rotation_period: "23"
// surface_water: "1"
// terrain: "desert"
// url: "http://swapi.dev/api/planets/1/"
// __proto__: Object

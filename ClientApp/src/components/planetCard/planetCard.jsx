import React from 'react'
import Card from 'react-bootstrap/Card'
import './planetCard.css'

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
          Climate: {selectedPlanet.climate}
          <br />
          Created: {selectedPlanet.created}
          <br />
          Diameter: {selectedPlanet.diameter}
          <br />
          Edited: {selectedPlanet.edited}
          <br />
          Gravity: {selectedPlanet.gravity}
          <br />
          Orbital period: {selectedPlanet.orbital_period}
          <br />
          Population: {selectedPlanet.population}
          <br />
          Rotation period: {selectedPlanet.rotation_period}
          <br />
          Surface water: {selectedPlanet.surface_water}
          <br />
          Terrain: {selectedPlanet.terrain}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default PlanetCard

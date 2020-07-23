import React from 'react'
import Card from 'react-bootstrap/Card'
import './starshipCard.css'

const extractId = (url) => {
  const idRegExp = /\/([0-9]*)\/$/
  return url.match(idRegExp)[1]
}
const _imageBase = 'https://starwars-visualguide.com/assets/img'
const StarshipCard = ({selectedShip}) => {
  const num = extractId(selectedShip.url)
  const url = _imageBase + '/starships/' + num + '.jpg'

  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{selectedShip.name}</Card.Title>
        <Card.Text>
          Model: {selectedShip.model}
          <br />
          Manufacturer: {selectedShip.manufacturer}
          <br />
          Class: {selectedShip.starship_class}
          <br />
          Cost: {selectedShip.cost_in_credits}
          <br />
          Speed: {selectedShip.max_atmosphering_speed}
          <br />
          Hyperdrive Rating: {selectedShip.hyperdrive_rating}
          <br />
          MGLT: {selectedShip.MGLT}
          <br />
          Length: {selectedShip.length}
          <br />
          Cargo Capacity: {selectedShip.cargo_capacity}
          <br />
          Mimimum Crew: {selectedShip.crew}
          <br />
          Passengers: {selectedShip.passengers}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default StarshipCard

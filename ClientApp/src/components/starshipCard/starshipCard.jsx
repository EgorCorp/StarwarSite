import React from 'react'
import Card from 'react-bootstrap/Card'
import './starshipCard.css'

const extractId = (url) => {
  const idRegExp = /\/([0-9]*)\/$/
  return url.match(idRegExp)[1]
}
const _imageBase = 'https://starwars-visualguide.com/assets/img'
const StarshipCard = ({selectedShip}) => {
  const num = extractId(selectedShip.fullInfo.url)
  const url = _imageBase + '/starships/' + num + '.jpg'
  const numberNull = 0
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{selectedShip.fullInfo.name}</Card.Title>
        <Card.Text>
          Model: {selectedShip.fullInfo.model}
          <br />
          Manufacturer: {selectedShip.fullInfo.manufacturer}
          <br />
          Class: {selectedShip.fullInfo.starship_class}
          <br />
          Cost: {selectedShip.fullInfo.cost_in_credits}
          <br />
          Speed: {selectedShip.fullInfo.max_atmosphering_speed}
          <br />
          Hyperdrive Rating: {selectedShip.fullInfo.hyperdrive_rating}
          <br />
          MGLT: {selectedShip.fullInfo.MGLT}
          <br />
          Length: {selectedShip.fullInfo.length}
          <br />
          Cargo Capacity: {selectedShip.fullInfo.cargo_capacity}
          <br />
          Mimimum Crew: {selectedShip.fullInfo.crew}
          <br />
          Passengers: {selectedShip.fullInfo.passengers}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default StarshipCard

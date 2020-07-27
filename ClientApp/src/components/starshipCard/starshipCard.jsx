import React from 'react'
import Card from 'react-bootstrap/Card'
import './starshipCard.css'
import {formatValue} from '../../utils/utils'

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
          Model: {formatValue(selectedShip.model, false)}
          Manufacturer:
          <span className="starValue">{selectedShip.manufacturer}</span>
          <br />
          Class:
          <span className="starValue"> {selectedShip.starship_class}</span>
          <br />
          Cost:{' '}
          <span className="starValue">
            {formatValue(selectedShip.cost_in_credits, true)}
          </span>
          Speed:{' '}
          <span className="starValue">
            {selectedShip.max_atmosphering_speed}
          </span>
          <br />
          Hyperdrive Rating:{' '}
          <span className="starValue">{selectedShip.hyperdrive_rating}</span>
          <br />
          MGLT: <span className="starValue"> {selectedShip.MGLT}</span>
          <br />
          Length: <span className="starValue"> {selectedShip.length}</span>
          <br />
          Cargo Capacity:{' '}
          <span className="starValue">
            {formatValue(selectedShip.cargo_capacity, true)}
          </span>
          Mimimum Crew: <span className="starValue"> {selectedShip.crew}</span>
          <br />
          Passengers:{' '}
          <span className="starValue"> {selectedShip.passengers}</span>
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default StarshipCard

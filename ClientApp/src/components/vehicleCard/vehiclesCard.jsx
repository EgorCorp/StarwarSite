import React from 'react'
import Card from 'react-bootstrap/Card'
import {FormatDateForView, extractId, _imageBase} from '../../utils/utils'

const VehicleCard = ({vehicle}) => {
  const num = extractId(vehicle.url)
  //https://starwars-visualguide.com/assets/img/vehicles/4.jpg
  const url = _imageBase + '/vehicles/' + num + '.jpg'

  return (
    <div>
      <Card style={{width: '18rem', marginBottom: '30px'}}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{vehicle.name}</Card.Title>
          {/* <Card.Text>
            
          </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  )
}
export default VehicleCard

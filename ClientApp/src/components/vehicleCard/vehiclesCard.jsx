import React from 'react'
import Card from 'react-bootstrap/Card'
import {FormatDateForView, extractId, _imageBase} from '../../utils/utils'
import {useState} from 'react'
import ModalDialog from '../modal/modal'
import './style.css'
import VehicleParameters from './vehicleParameters'

const VehicleCard = ({vehicle}) => {
  const num = extractId(vehicle.url)
  const [showMore, setShowMore] = useState(false)
  //https://starwars-visualguide.com/assets/img/vehicles/4.jpg
  const url = _imageBase + '/vehicles/' + num + '.jpg'
  const handleClick = () => {
    setShowMore(true)
  }
  console.log(vehicle)
  return (
    <div>
      <Card style={{width: '18rem', marginBottom: '30px'}}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{vehicle.name}</Card.Title>
          <button className="buttonMore" onClick={handleClick}>
            More
          </button>
          <ModalDialog
            show={showMore}
            handleClose={() => setShowMore(false)}
            title={vehicle.name}
            body={<VehicleParameters vehicle={vehicle} />}
          />
        </Card.Body>
      </Card>
    </div>
  )
}
export default VehicleCard

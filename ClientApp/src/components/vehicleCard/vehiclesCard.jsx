import React from 'react'
import Card from 'react-bootstrap/Card'
import {FormatDateForView, extractId, _imageBase} from '../../utils/utils'
import {useState} from 'react'
import ModalDialog from '../modal/modal'
import './style.css'
import VehicleParameters from './vehicleParameters'
import ParametersTable from '../parameterTable'

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
            //body={<VehicleParameters vehicle={vehicle} />}
            body={
              <ParametersTable
                parameters={[
                  {title: 'Cargo capacity', value: vehicle.cargo_capacity},
                  {title: 'Consumables', value: vehicle.consumables},
                  {title: 'Cost', value: vehicle.cost_in_credits},
                  {title: 'Created', value: FormatDateForView(vehicle.created)},
                  {title: 'Crew', value: vehicle.crew},
                  {title: 'Edited', value: FormatDateForView(vehicle.edited)},
                  {title: 'Length', value: vehicle.length},
                  {title: 'Manufacturer', value: vehicle.manufacturer},
                  {title: 'Speed', value: vehicle.max_atmosphering_speed},
                  {title: 'Model', value: vehicle.model},
                  {title: 'Passengers', value: vehicle.passengers},
                  {title: 'Vehicle class', value: vehicle.vehicle_class},
                ]}
              />
            }
          />
        </Card.Body>
      </Card>
    </div>
  )
}
export default VehicleCard
// cargo_capacity: '50000'
// consumables: '2 months'
// cost_in_credits: '150000'
// created: '2014-12-10T15:36:25.724000Z'
// crew: '46'
// edited: '2014-12-20T21:30:21.661000Z'
// films: (2)[('http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/5/')]
// length: '36.8 '
// manufacturer: 'Corellia Mining Corporation'
// max_atmosphering_speed: '30'
// model: 'Digger Crawler'
// name: 'Sand Crawler'
// passengers: '30'
// pilots: []
// url: 'http://swapi.dev/api/vehicles/4/'
// vehicle_class: 'wheeled'

import React from 'react'
import './style.css'
import {FormatDateForView} from '../../utils/utils'

const VehicleParameters = ({vehicle}) => {
  const showParam = (title, value) => (
    <tr>
      <td>{title}</td>
      <td>{value}</td>
    </tr>
  )

  return (
    <div>
      <table border="0" width="100%" cellSpacing="0" cellPadding="5">
        <tbody>
          {showParam('Cargo capacity', vehicle.cargo_capacity)}
          {showParam('Consumables', vehicle.consumables)}
          {showParam('Cost', vehicle.cost_in_credits)}
          {showParam('Created', FormatDateForView(vehicle.created))}
          {showParam('Crew', vehicle.crew)}
          {showParam('Edited', FormatDateForView(vehicle.edited))}
          {showParam('Length', vehicle.length)}
          {showParam('Manufacturer', vehicle.manufacturer)}
          {showParam('Speed', vehicle.max_atmosphering_speed)}
          {showParam('Model', vehicle.model)}
        </tbody>
      </table>
    </div>
  )
}
export default VehicleParameters

cargo_capacity: '50000'
consumables: '2 months'
cost_in_credits: '150000'
created: '2014-12-10T15:36:25.724000Z'
crew: '46'
edited: '2014-12-20T21:30:21.661000Z'
films: (2)[('http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/5/')]
length: '36.8 '
manufacturer: 'Corellia Mining Corporation'
max_atmosphering_speed: '30'
model: 'Digger Crawler'
name: 'Sand Crawler'
passengers: '30'
pilots: []
url: 'http://swapi.dev/api/vehicles/4/'
vehicle_class: 'wheeled'

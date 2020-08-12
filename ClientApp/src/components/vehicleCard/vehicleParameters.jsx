import React from 'react'
import './style.css'
import {FormatDateForView} from '../../utils/utils'

const VehicleParameters = ({vehicle}) => {
  const showParam = (title, value) => (
    <tr>
      <td>{title} :</td>
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

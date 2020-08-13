import React from 'react'
import './style.css'
import {FormatDateForView} from '../../utils/utils'

const ParametersTable = ({parameters}) => {
  // [{title: '', value: значение}, {}...]
  const showParam = (title, value) => (
    <tr>
      <td>{title} :</td>
      <td>{value}</td>
    </tr>
  )

  return (
    <div className="parametersTable">
      <table border="0" width="100%" cellSpacing="0" cellPadding="5">
        <tbody>{parameters.map((p) => showParam(p.title, p.value))}</tbody>
      </table>
    </div>
  )
}
export default ParametersTable

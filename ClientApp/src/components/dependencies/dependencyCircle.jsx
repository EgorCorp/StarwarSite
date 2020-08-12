import React from 'react'
import './dependencies.css'

const DependencyCircle = ({imgUrl, name, size}) => {
  return (
    <div className="Circle">
      <img
        className="CircleImg"
        src={imgUrl}
        alt=""
        style={{width: size, height: size}}
      />
      <span className="nameCircle">{name}</span>
    </div>
  )
}
export default DependencyCircle

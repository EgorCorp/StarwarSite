import React from 'react'
import './dependencies.css'
import DependencyItem from './dependencyItem'

const Dependencies = (props) => {
  const {urls, type} = props

  return (
    <div className="dependencies">
      {urls &&
        urls.map((url) => <DependencyItem key={url} url={url} type={type} />)}
    </div>
  )
}
export default Dependencies

import React from 'react'
import './dependencies.css'
import DependencyItem from './dependencyItem'

const Dependencies = (props) => {
  const {urls, type, variant, size} = props

  return (
    <div className="dependencies">
      {urls &&
        urls.map((url) => (
          <DependencyItem
            key={url}
            url={url}
            type={type}
            variant={variant}
            size={size}
          />
        ))}
    </div>
  )
}
export default Dependencies

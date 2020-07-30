import React from 'react'
import './dependencyButton.css'

const DependencyButton = ({urls, label, onClick}) => {
  console.log(urls)
  return (
    urls.length > 0 && (
      <>
        <button className="btnDependency" onClick={onClick}>
          {label}
        </button>
        <br />
      </>
    )
  )
}
export default DependencyButton

import React from 'react'
import './dependencies.css'
import Card from 'react-bootstrap/Card'

const DependencyCard = ({imgUrl, name}) => {
  return (
    <Card style={{width: '10rem'}}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  )
}
export default DependencyCard

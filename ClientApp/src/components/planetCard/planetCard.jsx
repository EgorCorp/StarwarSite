import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import './planetCard.css'
import {FormatDateForView, formatValue} from '../../utils/utils'
import Residents from '../residents/residents'
import DependencyButton from '../dependencies/dependencyButton'

const extractId = (url) => {
  const idRegExp = /\/([0-9]*)\/$/
  return url.match(idRegExp)[1]
}
const _imageBase = 'https://starwars-visualguide.com/assets/img'

const PlanetCard = ({selectedPlanet, onClickMore}) => {
  const num = extractId(selectedPlanet.url)
  const url = _imageBase + '/planets/' + num + '.jpg'
  //

  // useEffect(() => {
  //   setUrls(null)
  // }, [])

  const handleClick = (event) => {
    //
    if (onClickMore) onClickMore(selectedPlanet.residents)
  }

  return (
    <>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{selectedPlanet.name}</Card.Title>
          <Card.Text>
            Climate: {selectedPlanet.climate}
            <br />
            Created: {FormatDateForView(selectedPlanet.created)}
            <br />
            Diameter: {formatValue(selectedPlanet.diameter, true)}
            Edited: {FormatDateForView(selectedPlanet.edited)}
            <br />
            Gravity: {selectedPlanet.gravity}
            <br />
            Orbital period: {selectedPlanet.orbital_period}
            <br />
            Population: {formatValue(selectedPlanet.population, true)}
            Rotation period: {selectedPlanet.rotation_period}
            <br />
            Surface water: {selectedPlanet.surface_water}
            <br />
            Terrain: {selectedPlanet.terrain}
            <br />
            <DependencyButton
              urls={selectedPlanet.residents}
              label="Residents"
              onClick={handleClick}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
export default PlanetCard

import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import './planetCard.css'
import {FormatDateForView, formatValue} from '../../utils/utils'
import DependencyButton from '../dependencies/dependencyButton'
import ParametersTable from '../parameterTable'

const extractId = (url) => {
  const idRegExp = /\/([0-9]*)\/$/
  return url.match(idRegExp)[1]
}
const _imageBase = 'https://starwars-visualguide.com/assets/img'

const PlanetCard = ({
  selectedPlanet,
  onClickMore,
  onClickFilm,
  hideDependencies,
}) => {
  const num = extractId(selectedPlanet.url)
  let url = _imageBase + '/planets/' + num + '.jpg'
  if (num == 1)
    url = 'https://galacticvehicles.neocities.org/images/tatooine.jpg'

  const handleClick = (event) => {
    //
    if (onClickMore) onClickMore(selectedPlanet.residents)
  }
  const handleFilmClick = (event) => {
    if (onClickFilm) onClickFilm(selectedPlanet.films)
  }
  return (
    <>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{selectedPlanet.name}</Card.Title>
          <Card.Text>
            <ParametersTable
              parameters={[
                {title: 'Climate', value: selectedPlanet.climate},
                {
                  title: 'Created',
                  value: FormatDateForView(selectedPlanet.created),
                },
                {
                  title: 'Diameter',
                  value: formatValue(selectedPlanet.diameter, true),
                },
                {
                  title: 'Edited',
                  value: FormatDateForView(selectedPlanet.edited),
                },
                {title: 'Gravity', value: selectedPlanet.gravity},
                {title: 'Orbital period', value: selectedPlanet.orbital_period},
                {
                  title: 'Population',
                  value: formatValue(selectedPlanet.population, true),
                },
                {
                  title: 'Rotation period',
                  value: selectedPlanet.rotation_period,
                },
                {title: 'Surface water', value: selectedPlanet.surface_water},
                {title: 'Terrain', value: selectedPlanet.terrain},
              ]}
            />

            {!hideDependencies && (
              <>
                <DependencyButton
                  urls={selectedPlanet.residents}
                  label="Residents"
                  onClick={handleClick}
                />
                <DependencyButton
                  urls={selectedPlanet.films}
                  label="Films"
                  onClick={handleFilmClick}
                />
              </>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
export default PlanetCard

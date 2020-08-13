import React from 'react'
import Card from 'react-bootstrap/Card'
import './starshipCard.css'
import {formatValue} from '../../utils/utils'
import DependencyButton from '../dependencies/dependencyButton'
import ParametersTable from '../parameterTable'

const extractId = (url) => {
  const idRegExp = /\/([0-9]*)\/$/
  return url.match(idRegExp)[1]
}

const _imageBase = 'https://starwars-visualguide.com/assets/img'
const StarshipCard = ({
  selectedShip,
  onClickMore,
  onClickFilm,
  hideDependencies,
}) => {
  const num = extractId(selectedShip.url)
  const url = _imageBase + '/starships/' + num + '.jpg'
  const handleClick = (event) => {
    //
    if (onClickMore) onClickMore(selectedShip.pilots)
  }

  const handleFilmClick = (event) => {
    if (onClickFilm) onClickFilm(selectedShip.films)
  }

  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{selectedShip.name}</Card.Title>
        <Card.Text>
          <ParametersTable
            parameters={[
              {title: 'Model', value: selectedShip.model},
              {title: 'Class', value: selectedShip.starship_class},
              {
                title: 'Cost',
                value: formatValue(selectedShip.cost_in_credits, true),
              },
              {title: 'Speed', value: selectedShip.max_atmosphering_speed},
              {
                title: 'Hyperdrive Rating',
                value: selectedShip.hyperdrive_rating,
              },
              {title: 'MGLT', value: selectedShip.MGLT},
              {title: 'Length', value: selectedShip.length},
              {
                title: 'Cargo capacity',
                value: formatValue(selectedShip.cargo_capacity, true),
              },
              {title: 'Minimum Crew', value: selectedShip.crew},
              {title: 'Passenger', value: selectedShip.passengers},
            ]}
          />

          {!hideDependencies && (
            <>
              <DependencyButton
                urls={selectedShip.pilots}
                label="Pilots"
                onClick={handleClick}
              />
              <DependencyButton
                urls={selectedShip.films}
                label="Films"
                onClick={handleFilmClick}
              />
            </>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default StarshipCard

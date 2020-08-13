import React from 'react'
import Card from 'react-bootstrap/Card'
import {FormatDateForView} from '../../utils/utils'
import DependencyButton from '../dependencies/dependencyButton'
import './peopleCard.css'
import ParametersTable from '../parameterTable'

const extractId = (url) => {
  const idRegExp = /\/([0-9]*)\/$/
  return url.match(idRegExp)[1]
}

const _imageBase = 'https://starwars-visualguide.com/assets/img'
const PersonCard = ({
  person,
  onClickHome,
  onClickVehicle,
  onClickStarship,
  onClickFilm,
  hideDependencies,
}) => {
  const num = extractId(person.url)
  const url = _imageBase + '/characters/' + num + '.jpg'

  const handleHomeClick = (event) => {
    //
    if (onClickHome) onClickHome([person.homeworld])
  }
  const handleVehicleClick = (event) => {
    if (onClickVehicle) onClickVehicle(person.vehicles)
  }
  const handleStarshipClick = (event) => {
    if (onClickStarship) onClickStarship(person.starships)
  }
  const handleFilmClick = (event) => {
    if (onClickFilm) onClickFilm(person.films)
  }

  // const btnRender = () => (
  //   <>
  //     <div className="peopleBtn">
  //       <DependencyButton
  //         urls={[person.homeworld]}
  //         label="Home"
  //         onClick={handleHomeClick}
  //       />
  //       <DependencyButton
  //         urls={person.vehicles}
  //         label="Vehicles"
  //         onClick={handleVehicleClick}
  //       />
  //       <DependencyButton
  //         urls={person.starships}
  //         label="Starships"
  //         onClick={handleStarshipClick}
  //       />
  //       <DependencyButton
  //         urls={person.films}
  //         label="Films"
  //         onClick={handleFilmClick}
  //       />
  //     </div>
  //   </>
  // )

  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>
          <ParametersTable
            parameters={[
              {title: 'Birthday', value: person.birth_year},
              {title: 'Created', value: FormatDateForView(person.created)},
              {title: 'Edited', value: FormatDateForView(person.edited)},
              {title: 'Eye color', value: person.eye_color},
              {title: 'Gender', value: person.gender},
              {title: 'Hair color', value: person.hair_color},
              {title: 'Height', value: person.height},
              {title: 'Mass', value: person.mass},
              {title: 'Skin', value: person.skin_color},
            ]}
          />
        </Card.Text>
        <div className="peopleBtn">
          <div>
            {!hideDependencies && (
              <>
                <DependencyButton
                  urls={[person.homeworld]}
                  label="Home"
                  onClick={handleHomeClick}
                />
                <DependencyButton
                  urls={person.vehicles}
                  label="Vehicles"
                  onClick={handleVehicleClick}
                />
              </>
            )}
          </div>
          <div>
            {!hideDependencies && (
              <>
                <DependencyButton
                  urls={person.starships}
                  label="Starships"
                  onClick={handleStarshipClick}
                />
                <DependencyButton
                  urls={person.films}
                  label="Films"
                  onClick={handleFilmClick}
                />
              </>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default PersonCard

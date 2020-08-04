import React from 'react'
import Card from 'react-bootstrap/Card'
import {FormatDateForView} from '../../utils/utils'
import DependencyButton from '../dependencies/dependencyButton'
import './peopleCard.css'

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

  const btnRender = () => (
    <>
      <div className="peopleBtn">
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
      </div>
    </>
  )

  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>
          Birthday: {person.birth_year}
          <br />
          Created: {FormatDateForView(person.created)}
          <br />
          Edited: {FormatDateForView(person.edited)}
          <br />
          Eye color: {person.eye_color}
          <br />
          Gender: {person.gender}
          <br />
          Hair color: {person.hair_color}
          <br />
          Height: {person.height}
          <br />
          Mass: {person.mass}
          <br />
          Skin: {person.skin_color}
          <br />
        </Card.Text>
        {!hideDependencies && btnRender()}
      </Card.Body>
    </Card>
  )
}

export default PersonCard

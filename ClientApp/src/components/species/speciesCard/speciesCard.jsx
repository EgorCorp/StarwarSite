import React from 'react'
import {getVisualUrl, FormatDateForView} from '../../../utils/utils'
import Dependencies from '../../dependencies/dependencies'
import './speciesCard.css'

const SpeciesCard = ({speciesOne}) => {
  console.log(speciesOne)
  return (
    <div className="speciesCard">
      <img
        src={getVisualUrl('species', speciesOne.url)}
        alt={speciesOne.name}
        className="imgSpecies"
      />
      <div className="cardTextFlex">
        <div className="speciesCardTitle">{speciesOne.name}</div>
        <div className="speciesCardText">
          Average height: {speciesOne.average_height} sm
          <br />
          Average lifespan: {speciesOne.average_lifespan} years
          <br />
          Classification: {speciesOne.classification}
          <br />
          Created: {FormatDateForView(speciesOne.created)}
          <br />
          Designation: {speciesOne.designation}
          <br />
          Edited: {FormatDateForView(speciesOne.edited)}
          <br />
          Colors of eyes: {speciesOne.eye_colors}
          <br />
          Colors of hair: {speciesOne.hair_colors}
          <br />
          Colors of skin: {speciesOne.skin_colors}
          <br />
          Language: {speciesOne.language}
          <br />
        </div>
      </div>
      <div className="speciesDependency">
        {speciesOne && (
          <>
            <div className="speciesItem">
              <div className="speciesTitle">Homeworld</div>
              <Dependencies
                urls={[speciesOne.homeworld]}
                type="planets"
                variant="circle"
                size="100px"
              />
            </div>
            <div className="speciesItem">
              <div className="speciesTitle">Films</div>
              <Dependencies
                urls={speciesOne.films}
                type="films"
                variant="card"
                size="75px"
              />
            </div>
            <div className="speciesItem">
              <div className="speciesTitle">People</div>
              <Dependencies
                urls={speciesOne.people}
                type="characters"
                variant="card"
                size="75px"
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default SpeciesCard
// average_height: "180"
// average_lifespan: "120"
// classification: "mammal"
// created: "2014-12-10T13:52:11.567000Z"
// designation: "sentient"
// edited: "2014-12-20T21:36:42.136000Z"
// eye_colors: "brown, blue, green, hazel, grey, amber"
// films: (6) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/4/", "http://swapi.dev/api/films/5/", "http://swapi.dev/api/films/6/"]
// hair_colors: "blonde, brown, black, red"
// homeworld: "http://swapi.dev/api/planets/9/"
// language: "Galactic Basic"
// name: "Human"
// people: (4) ["http://swapi.dev/api/people/66/", "http://swapi.dev/api/people/67/", "http://swapi.dev/api/people/68/", "http://swapi.dev/api/people/74/"]
// skin_colors: "caucasian, black, asian, hispanic"
// url: "http://swapi.dev/api/species/1/"

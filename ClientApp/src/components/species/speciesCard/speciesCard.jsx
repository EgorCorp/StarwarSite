import React from 'react'
import {
  getVisualUrl,
  formatValue,
  FormatDateForView,
} from '../../../utils/utils'

const SpeciesCard = ({speciesOne}) => {
  console.log(speciesOne)
  return (
    <div className="speciesCard">
      <div className="speciesCardImg">
        <img
          src={getVisualUrl('species', speciesOne.url)}
          alt={speciesOne.name}
        />
      </div>
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

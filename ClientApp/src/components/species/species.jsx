import React, {useEffect, useState} from 'react'
import './species.css'
import SpeciesCard from './speciesCard/speciesCard'
import axios from 'axios'
import Pager from '../pager'

const Species = () => {
  const [species, setSpecies] = useState(null)
  const [page, setPage] = useState(null)
  const [pageCount, setPageCount] = useState(null)

  useEffect(() => {
    if (!page) {
      axios('https://swapi.dev/api/species/').then((species) => {
        setSpecies(species.data.results)
        setPageCount(species.data.count)
      })
    } else {
      axios('https://swapi.dev/api/species/?page=' + page).then((species) => {
        setSpecies(species.data.results)
      })
    }
  }, [page])
  return (
    <div className="mainSpecies">
      {species &&
        species.map((speciesOne) => (
          <SpeciesCard key={speciesOne.name} speciesOne={speciesOne} />
        ))}
      <Pager
        count={pageCount}
        page1Count={10}
        onClick={(page) => setPage(page)}
      />
    </div>
  )
}
export default Species

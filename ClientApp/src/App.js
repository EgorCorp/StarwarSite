import React, {Component} from 'react'
import {Route} from 'react-router'
import {Layout} from './components/Layout'
import Home from './components/Home'

import './custom.css'
import Starships from './components/starships/starships'
import People from './components/people/people'
import Planets from './components/planets/planets'
import Vehicles from './components/vehicles/vehicles'
import Dependencies from './components/dependencies/dependencies'
import AboutSite from './components/aboutSite'

const TestDependencies = () => {
  return (
    <>
      <Dependencies
        urls={[
          'https://swapi.dev/api/starships/12/',
          'https://swapi.dev/api/starships/22/',
        ]}
        type="starships"
      />
      <Dependencies urls={['http://swapi.dev/api/planets/1/']} type="planets" />
      {/* <Dependencies
        urls={[
          'http://swapi.dev/api/films/1/',
          'http://swapi.dev/api/films/2/',
          'http://swapi.dev/api/films/3/',
          'http://swapi.dev/api/films/6/',
        ]}
        type="films"
      /> */}
    </>
  )
}

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/starships" component={Starships} />
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planets} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/test" component={TestDependencies} />
        <Route path="/about" component={AboutSite} />
      </Layout>
    )
  }
}

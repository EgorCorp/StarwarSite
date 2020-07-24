import React, {Component} from 'react'
import {Route} from 'react-router'
import {Layout} from './components/Layout'
import Home from './components/Home'

import './custom.css'
import Starships from './components/starships/starships'
import People from './components/people/people'
import Planets from './components/planets/planets'
import Vehicles from './components/vehicles/vehicles'

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
      </Layout>
    )
  }
}

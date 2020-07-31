import React, {Component} from 'react'
import {Container} from 'reactstrap'
import {NavMenu} from './NavMenu'
import './layout.css'
import Footer from './footer/footer'

export class Layout extends Component {
  static displayName = Layout.name

  render() {
    return (
      <div className="main">
        <NavMenu />
        <Container>{this.props.children}</Container>
        <Footer {...this.props} />
      </div>
    )
  }
}

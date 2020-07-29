import React, {Component} from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import './NavMenu.css'
import Logo from './StarWarsLogo.png'

export class NavMenu extends Component {
  static displayName = NavMenu.name

  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <header>
        <div className="myNav">
          <Navbar
            className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
            light
          >
            <Container>
              <img className="logoImg" src={Logo} />
              <NavbarBrand tag={Link} to="/"></NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse
                className="d-sm-inline-flex flex-sm-row-reverse"
                isOpen={!this.state.collapsed}
                navbar
              >
                <ul className="navbar-nav flex-grow">
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/starships">
                      Starships
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/people">
                      People
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/planets">
                      Planets
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/vehicles">
                      Vehicles
                    </NavLink>
                  </NavItem>
                </ul>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    )
  }
}

import React from 'react'
import './footer.css'
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from 'mdbreact'

const Footer = () => {
  return (
    <div className="footerEgor">
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a href="#"> Egor Lukashin</a>
            <a
              style={{marginLeft: '20px'}}
              href="https://starwars-visualguide.com/#/"
            >
              Visual guide
            </a>
            <a style={{marginLeft: '20px'}} href="https://swapi.dev/">
              Api
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  )
}

export default Footer

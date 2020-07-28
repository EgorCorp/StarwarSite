import React from 'react'
import './footer.css'
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from 'mdbreact'
import '../animation/animation.css'

const Footer = () => {
  return (
    <div className="footerEgor">
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <div className="anLink">
              Copyright:{' '}
              <a className="effect-2" href="">
                Egor Lukashin
              </a>
              &copy; {new Date().getFullYear()}
            </div>
            <div className="anLink">
              <a
                className="effect-2"
                href="https://starwars-visualguide.com/#/"
              >
                Visual guide
              </a>
            </div>
            <div clasName="anLink">
              <a className="effect-2" href="https://swapi.dev/">
                Api
              </a>
            </div>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  )
}

export default Footer

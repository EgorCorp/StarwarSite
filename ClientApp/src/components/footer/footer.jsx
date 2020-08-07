import React from 'react'
import './footer.css'
import '../animation/animation.css'
import questionNo from './QuestionNo.png'

const Footer = (props) => {
  const handleClickAbout = () => {}
  return (
    <div className="Footer">
      <div className="footerEgor">
        <div className="footerLink">
          <div className="anLink">
            Copyright:{' '}
            <a className="effect-2" href="">
              Egor Lukashin
            </a>
          </div>
        </div>
        <div className="footerLink">
          <div className="anLink">
            <a className="effect-2" href="https://starwars-visualguide.com/#/">
              Visual guide
            </a>
          </div>
        </div>
        <div className="footerLink">
          <div className="anLink">
            <a className="effect-2" href="https://swapi.dev/">
              Api
            </a>
          </div>
        </div>
      </div>

      <a href="/about" className="aboutLink">
        <img className="question" src={questionNo} alt="questNo" />
      </a>
    </div>
  )
}

export default Footer

import React from 'react'
import './footer.css'
import '../animation/animation.css'
import questionNo from './QuestionNo.png'

const Footer = () => {
  return (
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
      <img className="question" src={questionNo} alt="questNo" />
    </div>
  )
}

export default Footer

import React from 'react'
import {Link} from "react-router-dom"

import '../CSS/style.css'
import faceIcon from '../Img/facebook.png'
import telIcon from '../Img/phone-call.png'
import mailIcon from '../Img/gmail.png'
import gitIcon from '../Img/github.png'

function homePage() {
  return (
    <div className="background">
      <div className="img"></div>
      <div className="img-tab"></div>
      <img src={faceIcon} className="face-icon"/>
      <img src={telIcon} className="tel-icon"/>
      <img src={mailIcon} className="mail-icon"/>
      <img src={gitIcon} className="git-icon"/>
      <div className="flexbox">
        <div className="font-osw edit-hi">Hi, </div>
        <div className="font-big font-name">I'm Chonticha Sae-jiw</div>
      </div>
      <div className="font-mont font-position">Front-end Developer</div>
      <div>
      <Link to="/aboutMe"><button className="button-port">View my portfolio</button></Link>
      <button className="button-download">Download resume</button>
      </div>
    </div>
  );
}

export default homePage;
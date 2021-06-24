import React from 'react'
import { Link } from "react-router-dom"
import Popup from 'reactjs-popup'

import '../CSS/style.css'
import faceIcon from '../Img/facebook.png'
import telIcon from '../Img/phone-call.png'
import mailIcon from '../Img/gmail.png'
import gitIcon from '../Img/github.png'
import resume from '../file/Resume.pdf'

function homePage() {
  function handleClick(e) {
    e.preventDefault();
    window.location.href = 'https://www.facebook.com/puifais.me/';
  }
  function handleGit(e) {
    e.preventDefault();
    window.location.href = 'https://github.com/puifaisme';
  }
  return (
    <div className="background">
      <div className="img"></div>
      <div className="img-tab"></div>
      <a href="#" onClick={handleClick}>
        <img src={faceIcon} className="face-icon" /></a>
      <Popup
        trigger={<img src={telIcon} className="tel-icon" />}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header font-mont"> TEL. </div>
            <div className="content font-mont">
              082-7946161<br />
            </div>
          </div>
        )}
      </Popup>
      <Popup
        trigger={<img src={mailIcon} className="mail-icon" />}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header font-mont"> GMAIL </div>
            <div className="content font-mont">
              chontichas.jiw@gmail.com<br />
            </div>
          </div>
        )}
      </Popup>
      <a href="#" onClick={handleGit}>
        <img src={gitIcon} className="git-icon" /></a>

      <div className="flexbox">
        <div className="font-osw edit-hi">Hi, </div>
        <div className="font-big font-name">I'm Chonticha Sae-jiw</div>
      </div>
      <div className="font-mont font-position">Front-end Developer</div>
      <div>
        <Link to="/aboutMe"><button className="button-port">View my portfolio</button></Link>
        <a href={resume} download="Chonticha_Resume.pdf"> <button className="button-download">Download resume</button></a>
      </div>
    </div>
  );
}

export default homePage;
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Popup from 'reactjs-popup'

import '../CSS/style.css'
import profile from '../Img/profile-rm.png'
import faceIcon from '../Img/facebook.png'
import telIcon from '../Img/phone-call.png'
import mailIcon from '../Img/gmail.png'
import gitIcon from '../Img/github.png'
import kmuttLogo from '../Img/kmutt-logo.png'
import resume from '../file/Resume.pdf'

function aboutMe() {
    function handleClick(e) {
        e.preventDefault();
        window.location.href = 'https://www.facebook.com/puifais.me/';
      }
      function handleGit(e) {
        e.preventDefault();
        window.location.href = 'https://github.com/puifaisme';
      }
    return (
        <div>
            <div className="nav-tab">
                <div className="flex font-mont">
                    <img src={kmuttLogo} className="moon-icon" />
                    <div className="name">CHONTICHA  SAE-JIW</div>
                    <button className="edit-about onpage">ABOUT ME</button>
                    <Link to="/portfolio"><button className="edit-port">PORTFOLIO</button></Link>
                    <Link to="/skills"><button className="edit-skill">SKILLS</button></Link>
                    <Popup
                        trigger={<div className="edit-cont">CONTACT</div>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="header font-mont"> CONTACT </div>
                                <div className="content font-mont">
                                    Facebook : Chonticha Sae-jiw <br />
                                    Gmail : chontichas.jiw@gmail.com<br />
                                    TEL : 082-7946161<br />
                                    Github : puifaisme<br />
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
            <img src={profile} className="edit-pic" />
            <div className="font-big aboutme">ABOUT ME</div>
            <hr className="style1"></hr>
            <div className="font-mont position">FRONT-END DEVELOPER</div>
            <div className="font-mont descript">Hi, my name is Chonticha Sae-jiw. I want to make a career as a programmer.</div>
            <div className="font-mont descript">In the beginning, I most interested in the front-end programmer position.</div>
            <div className="font-mont descript"> I had a project and activities within the faculty in this position</div>
            <div className="font-mont descript">which including the final project that has decorated the screen to show the user.</div>
            <div className="font-mont descript">Even though it's not a website, it's just a GUI but I always practiced about this.</div>
            <a href={resume} download="Chonticha_Resume.pdf"> <button className="button-download1">Download resume</button></a>
            <a href="#" onClick={handleClick}>
        <img src={faceIcon} className="face-icon1" /></a>
      <Popup
        trigger={<img src={telIcon} className="tel-icon1" />}
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
        trigger={<img src={mailIcon} className="mail-icon1" />}
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
        <img src={gitIcon} className="git-icon1" /></a>

        </div>
    );
}

export default aboutMe;
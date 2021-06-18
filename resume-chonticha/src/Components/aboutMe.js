import React, { Component } from 'react'

import profile from '../Img/profile-rm.png'
import faceIcon from '../Img/facebook.png'
import telIcon from '../Img/phone-call.png'
import mailIcon from '../Img/gmail.png'
import gitIcon from '../Img/github.png'
import moon from '../Img/moon.png'
import kmuttLogo from '../Img/kmutt-logo.png'

function aboutMe() {
    return (
        <div>
            <div className="nav-tab">
                <div className="flex font-mont">
                    {/* <img src={moon} className="moon-icon" /> */}
                    <img src={kmuttLogo} className="moon-icon" />
                    <div className="name">CHONTICHA  SAE-JIW</div>
                    <button className="edit-about">ABOUT ME</button>
                    <button className="edit-port">PORTFOLIO</button>
                    <button className="edit-skill">SKILLS</button>
                    <button className="edit-cont">CONTACT</button>
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
            <button className="button-download1">Download resume</button>
            <img src={faceIcon} className="face-icon1" />
            <img src={telIcon} className="tel-icon1" />
            <img src={mailIcon} className="mail-icon1" />
            <img src={gitIcon} className="git-icon1" />
        </div>
    );
}

export default aboutMe;
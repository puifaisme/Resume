import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'

import kmuttLogo from '../Img/kmutt-logo.png'
import react from '../Img/react.png'
import python from '../Img/python.png'
import bootstrap from '../Img/bootstrap.png'
import html from '../Img/html.png'
import css from '../Img/css.png'
import sql from '../Img/sql.jpg'
import postman from '../Img/postman.jpg'
import heroku from '../Img/heroku.png'
import node from '../Img/node.png'
import git from '../Img/github.png'

function skills() {
    return (
        <div>
            <div className="nav-tab1">
                <div className="flex font-mont">
                    <img src={kmuttLogo} className="moon-icon" />
                    <div className="name">CHONTICHA  SAE-JIW</div>
                    <Link to="/aboutMe"><button className="edit-about-1">ABOUT ME</button></Link>
                    <Link to="/portfolio"><button className="edit-port-2">PORTFOLIO</button></Link>
                    <button className="edit-skill-2 onpage">SKILLS</button>
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
            <div className="flex">
                <div>
                    <div className="flex">
                        <img src={react} className="react-edit" />
                        <img src={python} className="python-edit" />
                        <img src={bootstrap} className="boot-edit" />
                        <img src={html} className="html-edit" />
                    </div>
                    <div>
                        <img src={css} className="css-edit" />
                        <img src={sql} className="sql-edit" />
                        <img src={postman} className="post-edit" />
                        <img src={heroku} className="hero-edit" />
                    </div>
                    <div>
                        <img src={node} className="node-edit" />
                        <img src={git} className="git-edit" />
                    </div>
                </div>
                <div>
                    <div className="font-big skills-edit">My skills</div>
                    <hr className="style2"></hr>
                    <div className="font-mont skill-edit">I want to improve my skills more. <br/>So I will continue to practice to improve my skills. </div>
                </div>
            </div>
        </div>
    )
}

export default skills;
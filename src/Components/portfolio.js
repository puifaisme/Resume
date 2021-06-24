import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import '../CSS/style.css'
import kmuttLogo from '../Img/kmutt-logo.png'
import Int106 from '../Videos/int106.gif'
import Alpaca from '../Videos/Alpaca.gif'
import Urban from '../Videos/Urban.gif'
import Hci from '../Videos/Hci.gif'
import finalProject from '../Videos/finalProject.gif'


function portfolio() {
    function handleClick106(e) {
        e.preventDefault();
        window.location.href = 'https://github.com/puifaisme/WEB-Tech-int106';
      }
    function handleClickAlpaca(e) {
        e.preventDefault();
        window.location.href = 'https://github.com/puifaisme/Web-Alpaca';
      }
      function handleClick303(e) {
        e.preventDefault();
        window.location.href = 'https://github.com/puifaisme/WEB-Pro-int303';
      }
      function handleClick305(e) {
        e.preventDefault();
        window.location.href = 'https://www.figma.com/file/NKzVvr2MVLx2qEJweQFTTs/HCI?node-id=0%3A1';
      }
      function handleClick450(e) {
        e.preventDefault();
        window.location.href = 'https://seniorproject.sit.kmutt.ac.th/showproject/IT60-BU36';
      }
    return (
        <div>
            <div className="nav-tab1">
                <div className="flex font-mont">
                    <img src={kmuttLogo} className="moon-icon" />
                    <div className="name">CHONTICHA  SAE-JIW</div>
                    <Link to="/aboutMe"><button className="edit-about-1">ABOUT ME</button></Link>
                    <button className="edit-port-1">PORTFOLIO</button>
                    <Link to="/skills"><button className="edit-skill-1">SKILLS</button></Link>
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
                <div className="flex margin">
                    <div className="wid">
                        <div className="wid-106-header font-mont">INT106</div>
                        <div className="wid-106-hname font-mont">WEB Technology</div>
                        <div className="content-port font-mont">วิชาที่สอนเกี่ยวกับการสร้างเว็บไซต์ด้วย <br />HTML CSS และ Javascript เบื้องต้น</div>
                        <a href="#" onClick={handleClick106}>
                        <button className="view-more">VIEW MORE</button></a>

                    </div>
                    <img src={Int106} className="edit-gif-106" />
                </div>
                <div className="flex margin">
                    <div className="wid1">
                        <div className="wid-106-header font-mont">Hello World</div>
                        <div className="wid-106-hname font-mont">Alpaca #1</div>
                        <div className="content-port font-mont">โปรเจคของรุ่นพี่สำหรับรุ่นน้องปี 1 ที่สนใจในการสร้างเว็บไซต์ <br />โดยเราเลือกเข้าร่วมและทำในตำแหน่ง Front-end</div>
                        <a href="#" onClick={handleClickAlpaca}>
                        <button className="view-more">VIEW MORE</button></a>

                    </div>
                    <img src={Alpaca} className="edit-gif-106" />
                </div>
            </div>
            <div className="flex">
                <div className="flex margin-1">
                    <div className="wid-1">
                        <div className="wid-106-header font-mont">INT303</div>
                        <div className="wid-106-hname font-mont">WEB Programming</div>
                        <div className="content-port font-mont">วิชาที่สอนเกี่ยวกับการสร้างเว็บไซต์ด้วย <br />Java และสอนหลักการของ MVC</div>
                        <a href="#" onClick={handleClick303}>
                        <button className="view-more">VIEW MORE</button></a>

                    </div>
                    <img src={Urban} className="edit-gif-106-1" />
                </div>
                <div className="flex margin-1">
                    <div className="wid1-1">
                        <div className="wid-106-header font-mont">INT305</div>
                        <div className="wid-106-hname font-mont">Human computer Interaction</div>
                        <div className="content-port font-mont">วิชาสอนการออกแบบเว็บไซต์ให้มีความง่ายต่อ Users <br />โดยสอน design thinking รวมรวมข้อมูล กำหนด persona</div>
                        <a href="#" onClick={handleClick305}>
                        <button className="view-more">VIEW MORE</button></a>

                    </div>
                    <img src={Hci} className="edit-gif-106" />
                </div>
            </div>
            <div className="flex">
                <div className="flex margin-1">
                    <div className="wid-1-1">
                        <div className="wid-106-header font-mont">INT450</div>
                        <div className="wid-106-hname font-mont">Final Project</div>
                        <div className="content-port font-mont">เป็นโปรเจค Computer vision เขียนด้วยภาษา python <br/>
                        ใช้ในการนับจำนวนบัณฑิตทั้งหมดทั้งในวันซ้อมและวันจริง</div>
                        <a href="#" onClick={handleClick450}>
                        <button className="view-more">VIEW MORE</button></a>

                    </div>
                    <img src={finalProject} className="edit-gif-106-2" />
                </div>
            </div>
        </div>
    )
}

export default portfolio;
import React from 'react'
import '../CSS/style.css'

function homePage() {
  return (
    <div className="background">
      <div className="img"></div>
      <div className="flexbox">
        <div className="font-osw edit-hi">Hi, </div>
        <div className="font-big font-name">I'm Chonticha Sae-jiw</div>
      </div>
      <div className="font-mont font-position">Front-end Developer</div>
      <div>
      <button className="button-port">View my portfolio</button>
      <button className="button-download">Download resume</button>
      </div>
    </div>
  );
}

export default homePage;
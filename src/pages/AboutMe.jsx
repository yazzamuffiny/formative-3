import React from 'react'

//import icons
import { DiJsBadge } from "react-icons/di"; 
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiFigma } from "react-icons/si";

const AboutMe = () => {
  return (
    <>
        <div className="about-me">
            <div className='top-section'>
                <div className='img-box'>
                  <img src="./imgs/yaz-img.jpg" alt="Image of Yaz" />
                </div>
                <div className="about-me-header-text">
                    <h1>About Me</h1>
                    <h3>Hello! My name is Yaz and I made this website :D</h3>
                </div>
            </div>
          <div className="body-text">
              <p>
                  Kia Ora! As I said above my name is Yaz. I am currently a web development student at Yoobee Colleges. I am familiar with HTML CSS and JS, and am currently learning React, which this site was built on. I also have very strong graphic design skills, the design programs I am familiar with are listed below. 
              </p>
          </div>
          <h3 className="subheader">Design Tools I know</h3>
          <div className="dev-icons">
            <div>
              <SiAdobeillustrator className='icon blue'/>
              <p>Illustrator</p>
            </div>
            <div>
              <SiAdobephotoshop className='icon pink'/>
              <p>Photoshop</p>
            </div>
            <div>
              <SiAdobeindesign className='icon blue'/>
              <p>Indesign</p>
            </div>
            <div>
              <SiAdobeaftereffects className='icon pink'/>
              <p>After Effects</p>
            </div>
            <div>
              <SiFigma className='icon blue'/>
              <p>Figma</p>
            </div>
          </div>

          <h3 className='subheader'>Coding Languages and Libraries I know</h3>
          <div className="dev-icons bottom">
            <div>
              <DiHtml5 className='icon pink'/>
              <p>HTML</p>
            </div>
            <div>
              <DiCss3 className='icon blue'/>
              <p>CSS</p>
            </div>
            <div>
              <DiJsBadge className='icon pink'/>
              <p>JavaScript</p>
            </div>
            <div>
              <DiJqueryLogo className='icon blue'/>
              <p>JQuery</p>
            </div>
            <div>
              <DiSass className='icon pink'/>
              <p>Sass</p>
            </div>
            <div>
              <DiReact className='icon blue'/>
              <p>React &#40;kinda&#41;</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default AboutMe


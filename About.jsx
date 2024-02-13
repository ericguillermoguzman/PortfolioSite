import React from 'react'
import './about.css'

import {FaReact} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {FaWordpressSimple} from 'react-icons/fa'
import {DiNpm} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiMongodb} from 'react-icons/si'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiR} from 'react-icons/si'
import {SiC} from 'react-icons/si'
import {SiJava} from 'react-icons/si'
import {SiPython} from 'react-icons/si'


const About = () => {
  return (
    <section id="about" className="about">
      <h5>MY AMBITION</h5>
      <div className="container about_container">
        <div className="about_cards">
          <article className="about_card">
            I am a professional software engineer. In my many endeavors I have done a great deal of software programming, website development, and data engineering. Now, I want to focus in a fast paced, team oriented environment. I love critical thinking, I love programming, and I love working with teammates that share a passion to do great things.
          </article>
        </div>
      </div>
      <h5>MY SKILLSETS</h5>
      <div className="container about_container">

          <div className="about_cards">
            <h2>Programming Languages</h2>
            <article className="about_card">
              <div className="divide"><SiR/> </div>
              <div className="divide"><SiC/> </div>
              <div className="divide"><SiJava/> </div>
              <div className="divide"><SiPython/> </div>
            </article>
          </div>

          <div className="about_cards">
            <h2>Web Design</h2>
            <article className="about_card">
              <div className="divide"><FaReact/> </div>
              <div className="divide"><AiOutlineHtml5/> </div>
              <div className="divide"><DiCss3/> </div>
              <div className="divide"><SiJavascript/> </div>
              <div className="divide"><FaWordpressSimple/> </div>
              <div className="divide"><DiNpm/> </div>
              <div className="divide"><FaNodeJs/> </div>
              <div className="divide"><AiOutlineGithub/> </div>
              <div className="divide"><SiMongodb/> </div>
            </article>
          </div>
        
          <div className="about_cards">
            <h2>Art Design</h2>
            <article className="about_card">
              <div className="divide"><SiAdobephotoshop/></div>
              <div className="divide"><SiAdobeillustrator/></div>
            </article>            
          </div>         
      </div>
    </section>
  )
}

export default About

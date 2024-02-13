import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ericguillermoguzman/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ericguillermoguzman" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default headerSocials
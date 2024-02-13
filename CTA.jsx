import React from 'react'
import EricGuzmanResume2024 from '../../assets/Eric Guzman Resume 2024.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={EricGuzmanResume2024} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
import React from 'react'
import Intro from '../content/Intro'
import Skills from '../content/Skills'
import About from '../content/About'
const Contents = () => {
  return (
    <div className='flex flex-col'>
      <Intro />
      <About />
      <Skills />
    </div>
  )
}

export default Contents

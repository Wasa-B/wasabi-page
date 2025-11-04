import Intro from '../content/Intro'
import Skills from '../content/Skills'
import About from '../content/About'
import Projects from '../content/Projects'

const Contents = () => {
  return (
    <div className='flex flex-col w-[1080px] mx-auto gap-20 py-20'>
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Contents

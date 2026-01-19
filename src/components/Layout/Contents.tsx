import Intro from '../content/Intro'
import Skills from '../content/Skills'
import About from '../content/About'
import Projects from '../content/Projects'
import Contact from '../content/Contact'
import { useRef } from 'react'
import Navigator from './Navigator'
import SpinGear from '../common/SpinGear'
export type ContentRefs = {
  intro: React.RefObject<HTMLDivElement | null>
  about: React.RefObject<HTMLDivElement | null>
  skills: React.RefObject<HTMLDivElement | null>
  projects: React.RefObject<HTMLDivElement | null>
  contact: React.RefObject<HTMLDivElement | null>
}

const Contents = () => {
  const contentRefs: ContentRefs = {
    intro: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const handleScroll = (index: number) => {
    const targetRef = contentRefs[Object.keys(contentRefs)[index] as keyof ContentRefs];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    } else {
      console.error(`Content with index ${index} not found`);
    }
  }

  return (
    <>
      <Navigator handleScroll={handleScroll} />
      <div className='flex flex-col lg:w-[1080px] w-full mx-auto gap-20 py-20 lg:px-0 px-5'>
        <div ref={contentRefs.intro} className='section-background'>
          <Intro />
        </div>
        <div ref={contentRefs.about} className='section-background'>
          <About />
        </div>
        <div ref={contentRefs.skills} className='section-background'>
          <Skills />
        </div>
        <div ref={contentRefs.projects} className='section-background'>
          <Projects />
        </div>
        <div ref={contentRefs.contact} className='section-background'>
          <Contact />
        </div>
      </div>
      <div className='fixed left-10 top-20 hidden xl:block'>
        <SpinGear />
      </div>
    </>
  )
}

export default Contents

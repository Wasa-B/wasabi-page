import ContentHeader from "../common/ContentHeader"
import { aboutData } from "../../data/about"


const AboutContent = ({title, text}:{title:string, text:string}) =>{

  return (
    <div className="text-xl pb-5">
      <h2 className="text-2xl pb-2">[{title}]</h2>
      <p className="select-text text-[var(--sub-font-color)]">{text}</p>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <ContentHeader index={1} title="소개" />  
      <div className="flex xl:flex-row flex-col justify-center items-center">
        <div className="xl:w-3/5 w-full px-5">
          {
            aboutData.map((about) => (
              <AboutContent key={about.title} title={about.title} text={about.text} />
            ))
          }
        </div>
        <div className="xl:w-2/5 sm:w-[640px] w-full h-[400px] px-5 border border-neutral-400 rounded-30px">

        </div>
      </div>
    </div>
  )
}

export default About

import { useState } from "react";
import ContentHeader from "../common/ContentHeader";
import SkillContent from "../common/SkillContent";
import Iconbox from "../common/Iconbox";
import { skillData } from "../../data/skill";
const skills = skillData;

const skillCategory = ["overview", ...Object.keys(skills)];
const skillCategoryLength = skillCategory.length;

const SkillOverView = () => {
  return (
    <div>
      {
        skillCategory.map((key) => {
          if(key === "overview") return null;
          return(
            <div key={key}>
            <h3 className="text-xl pb-2">{key}</h3>
            <div className="flex pb-5 flex-wrap">
              {
                skills[key as keyof typeof skills]&&skills[key as keyof typeof skills].map((skill) => (
                  <div key={skill.title} className="p-2">
                    <Iconbox icon={skill.icon} />
                  </div>
                ))
              }
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

const Skills = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="">
      <ContentHeader index={2} title="Skills" />
      <div className="flex xl:flex-row flex-col">
        <div className="skill-nav w-1/7 xl:block hidden">
          <div className="flex flex-col gap-3 pl-5 relative">
            {skillCategory.map((key,idx) => (
              <div key={key} className="cursor-pointer" onClick={() => setIndex(idx)}>
                <h3 className={`text-lg font-light ${index === idx ? "text-[var(--primary-color)]" : "text-[var(--sub-font-color)]"}`}>{key}</h3>
              </div>
            ))}
            <div className="absolute top-0 left-0 h-full w-[2px] bg-[var(--sub-font-color)]" />
            <div className={`absolute top-0 left-0 w-[2px] bg-[var(--primary-color)] transition-all duration-400 ease-out`}
            style={{transform: `translateY(${index * 100}%)`, height: `calc(1/${skillCategoryLength} * 100%)`}}
            />
          </div>
        </div>
        <div className="skill-nav xl:hidden pb-10">
          <div className="flex relative w-full justify-between">
            {skillCategory.map((key,idx) => (
              <div key={key} className="cursor-pointer w-1/7 h-10 flex items-center justify-center" onClick={() => setIndex(idx)}>
                <h3 className={`sm:text-lg text-sm font-light ${index === idx ? "text-[var(--primary-color)]" : ""}`}>{key}</h3>
              </div>
            ))}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--sub-font-color)]" />
            <div className={`absolute bottom-0 left-0 h-[2px] bg-[var(--primary-color)] transition-all duration-400 ease-out`}
            style={{transform: `translateX(${index * 100}%)`, width: `calc(1/${skillCategoryLength} * 100%)`}}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 xl:w-6/7 w-full">
          <div className="border-b pb-5">
            <span className="text-[var(--sub-font-color)]">skill stack</span>
            <h3 className="text-2xl font-bold">{ skillCategory[index]}</h3>
          </div>
          <div >
            <div className="flex flex-col gap-5 pl-2 pt-5">
              {skills[skillCategory[index] as keyof typeof skills]&&skills[skillCategory[index] as keyof typeof skills].map((skill) => (
                <SkillContent key={skill.title} title={skill.title} text={skill.text} icon={skill.icon} />
              ))}
            </div>
            {index === 0 && <SkillOverView />}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills

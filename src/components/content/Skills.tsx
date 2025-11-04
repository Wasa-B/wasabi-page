import { useState } from "react";
import ContentHeader from "../common/ContentHeader";
import SkillContent from "../common/SkillContent";
import Iconbox from "../common/Iconbox";

const skills = {
  language: [
    {
      title: "JavaScript",
      text: "설명",
      icon: "javascript",
    },
    {
      title: "TypeScript",
      text: "설명",
      icon: "typescript",
    },
    {
      title: "Python",
      text: "설명",
      icon: "python",
    },
    {
      title: "C#",
      text: "설명",
      icon: "csharp",
    },
    {
      title: "Java",
      text: "설명",
      icon: "java",
    },
    
  ],
  frontend: [
    {
      title: "React",
      text: "설명",
      icon: "react",
    },
    {
      title: "Next.js",
      text: "설명",
      icon: "next-js",
    },
    {
      title: "tailwindcss",
      text: "설명",
      icon: "tailwindcss",
    },
    {
      title: "html",
      text: "설명",
      icon: "html5",
    },
    {
      title: "css",
      text: "설명",
      icon: "css3",
    },
  ],
  backend: [
    {
      title: "Express",
      text: "설명",
      icon: "node-js",
    },
    {
      title: "FastAPI",
      text: "설명",
      icon: "fastapi",
    },
    {
      title: "NestJS",
      text: "설명",
      icon: "nestjs",
    }
  ],
  database: [
    {
      title: "PostgreSQL",
      text: "설명",
      icon: "postgresql",
    },
    {
      title: "MongoDB",
      text: "설명",
      icon: "mongodb",
    },
  ],
  etc: [
    {
      title: "Docker",
      text: "설명",
      icon: "docker",
    },
    {
      title: "Git",
      text: "설명",
      icon: "git",
    },
    {
      title: "GitHub",
      text: "설명",
      icon: "github",
    },
    {
      title: "AWS EC2",
      text: "설명",
      icon: "aws-ec2",
    },
    {
      title: "Jenkins",
      text: "설명",
      icon: "jenkins",
    },
    {
      title: "Unity",
      text: "설명",
      icon: "unity",
    },
    {
      title: "OpenAI API",
      text: "설명",
      icon: "openai",
    }
  ],
}

const skillCategory =["overview","language", "frontend", "backend", "database", "etc"]

const SkillOverView = () => {
  return (
    <div>
      {
        skillCategory.map((key) => {
          if(key === "overview") return null;
          return(
            <div key={key}>
            <h3 className="text-xl pb-2">{key}</h3>
            <div className="flex pb-5">
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
      <div className="flex">
        <div className="skill-nav w-1/7">
          
          <div className="flex flex-col gap-3 pl-5 relative">
            {skillCategory.map((key,idx) => (
              <div key={key} className="cursor-pointer" onClick={() => setIndex(idx)}>
                <h3 className="text-lg font-light">{key}</h3>
              </div>
            ))}
            <div className="absolute top-0 left-0 h-full w-[2px] bg-[var(--sub-font-color)]" />
            <div className={`absolute top-0 left-0 h-1/6 w-[2px] bg-[var(--primary-color)] transition-all duration-400 ease-out`}
            style={{transform: `translateY(${index * 100}%)`}}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-6/7">
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

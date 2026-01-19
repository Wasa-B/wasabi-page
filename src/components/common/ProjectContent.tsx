import type { Project } from "../../data/project"
import { Github, Link } from "lucide-react";

const ProjectContent = ({ project, img_left = true }: { project: Project, img_left: boolean }) => {
  const { title, description, works, start_date, end_date, image, link, github, skills } = project;
  return (
    <div className={`flex flex-col justify-center items-center gap-5 ${img_left ? "xl:flex-row" : "xl:flex-row-reverse"} xl:items-start`}>
      <div className="xl:w-1/2 xl:block hidden">
        <div className="p-2">
          <div className="relative h-full w-full rounded-lg overflow-hidden">
            <div className="w-full h-full absolute top-0 left-0 bg-[var(--primary-color)] opacity-20" />
            <img src={`images/${image}`} alt={title} />
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 sm:w-[640px] w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold">{title}</h3>
          {
            link && (
              <a href={link} target="_blank"><Link className="w-5 h-5 text-[var(--primary-color)]" /></a>
            )
          }
          {
            github && (
              <a href={github} target="_blank"><Github className="w-5 h-5 text-[var(--primary-color)]" /></a>
            )
          }
        </div>
        <p className="text-[var(--sub-font-color)]">{start_date} - {end_date}</p>
        <div className="w-full h-[1px] bg-[var(--sub-font-color)] my-3" />
        <div className="xl:hidden sm:w-[640px] w-full">
          <div className="p-2">
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <div className="w-full h-full absolute top-0 left-0 bg-[var(--primary-color)] opacity-20" />
              <img src={`images/${image}`} alt={title} />
            </div>
          </div>
        </div>
        <p className="text-[var(--sub-font-color)] pb-5 select-text">
          {description.trim().split("\n").map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}
        </p>
        <ol className="text-[var(--sub-font-color)] pb-5 select-text">
          {works.trim().split("\n").map((line, index) => (
            <li key={index} className="list-disc list-inside">{line}</li>
          ))}
        </ol>
        <div className="flex gap-2 flex-wrap select-text">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectContent

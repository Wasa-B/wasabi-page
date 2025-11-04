import type { Project } from "../../data/project"
import { Github, Link } from "lucide-react";

const ProjectContent = ({project, img_left=true}: {project: Project, img_left: boolean}) => {
  const {title, description, start_date, end_date, image, link, github, skills} = project;
  return (
    <div className={`flex gap-5 ${img_left ? "flex-row" : "flex-row-reverse"} items-start`}>
      <div className="w-1/2">
        <div className="p-2">
          <div className="relative h-full w-full">
            <div className="w-full h-full absolute top-0 left-0 bg-[var(--primary-color)] opacity-20"/>
            <img src={`images/${image}`} alt={title} />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold">{title}</h3>
          <a href={link} target="_blank"><Link className="w-5 h-5 text-[var(--primary-color)]"/></a>
          <a href={github} target="_blank"><Github className="w-5 h-5 text-[var(--primary-color)]"/></a>
        </div>
        <p className="text-[var(--sub-font-color)]">{start_date} - {end_date}</p>
        <div className="w-full h-[1px] bg-[var(--sub-font-color)] my-3"/>
        <p className="text-[var(--sub-font-color)] pb-5">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectContent

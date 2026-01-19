import ContentHeader from "../common/ContentHeader"
import { projectData } from "../../data/project"
import ProjectContent from "../common/ProjectContent";
import ScrollReveal from "../common/ScrollReveal";


const Projects = () => {
  const projects = projectData;
  return (
    <div>
      <ContentHeader index={3} title="Projects" />
      <div className="flex flex-col gap-20">
        {projects.map((project, idx) => (
          <ScrollReveal key={idx}>
            <ProjectContent project={project} img_left={idx % 2 === 0} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

export default Projects

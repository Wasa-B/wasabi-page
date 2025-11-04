import ContentHeader from "../common/ContentHeader"
import { projectData } from "../../data/project"
import ProjectContent from "../common/ProjectContent";


const Projects = () => {
  const projects = projectData;
  return (
    <div>
      <ContentHeader index={3} title="Projects" />
      <div className="flex flex-col gap-20">
        {projects.map((project, idx) => (
          <ProjectContent key={idx} project={project} img_left={idx % 2 === 0} />
        ))}
      </div>
    </div>
  )
}

export default Projects

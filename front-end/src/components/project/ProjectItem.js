import { useNavigate } from "react-router-dom";

import style from "./style/ProjectItem.module.css";

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();

  const handleClickProjectDetail = () => {
    navigate(`/projects/${project.slug}`, { state: { project: project } });
  };

  return (
    <>
      <div className={style.projectItem}>
        <div className={style.projectItemName}>{project.name}</div>

        <div className={style.projectItemDescription}>
          {project.description}
        </div>

        <div className={style.projectItemTechnologies}>
          {project.technologies &&
            project.technologies.map((technology) => (
              <div className={style.projectTechnologyItem} key={technology}>
                {technology}
              </div>
            ))}
        </div>

        <div className={style.btnArea}>
          <a
            href={project.repository_url}
            className={`${style.btnProjectLink} ${style.btn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
          <div
            className={`${style.btnProjectDetail} ${style.btn}`}
            onClick={handleClickProjectDetail}
          >
            Detail
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;

import style from "./style/ProjectPaginator.module.css";

import { useState } from "react";

// components
import Paginator from "../others/Paginator";
import ProjectItem from "./ProjectItem";

const ProjectPaginator = ({ projects, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={style.completeAppArea}>
      <div className={style.projectItemList}>
        {currentProjects &&
          currentProjects.map((project) => (
            <ProjectItem project={project} key={project.name} />
          ))}
      </div>

      <Paginator
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProjectPaginator;

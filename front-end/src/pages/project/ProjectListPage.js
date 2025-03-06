import data from "./../../data/projects.json";

import { PROJECTS_PER_PAGE } from "./../../config/pagination";
import { useState } from "react";

// components
import PageDescription from "../../components/others/PageDescription";
import ProjectPaginator from "../../components/project/ProjectPaginator";
import TitleSession from "../../components/others/TitleSession";


const ProjectListPage = () => {
    const [description] = useState(data.pageDescription);
    const [projects] = useState(data.projects);
  
    return (
      <>
        <TitleSession title="Projects"/>
  
        <PageDescription description={description} />

        <TitleSession title="completed-app"/>
        {projects && <ProjectPaginator projects={projects} itemsPerPage={PROJECTS_PER_PAGE}/>}

        <TitleSession title="small-projects"/>
      </>
    );
}

export default ProjectListPage;
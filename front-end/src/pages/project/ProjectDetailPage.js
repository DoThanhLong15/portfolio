import style from "./style/ProjectDetailPage.module.css";
import ReactMarkdown from "react-markdown";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// components
import ButtonOpenLink from "components/others/ButtonOpenLink";
import TitleSession from "components/others/TitleSession";
import ReturnButton from "components/others/ReturnButton";

const ProjectDetailPage = () => {
  const location = useLocation();
  const project = location.state.project;
  const username = project.owner.username;
  const [avatarUrl, setAvatarUrl] = useState("");

  const fetchProjectOwnerProfile = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setAvatarUrl(data.avatar_url))
      .catch((error) => console.error("Error fetching GitHub avatar:", error));
  };

  useEffect(() => {
    fetchProjectOwnerProfile();
  });

  return (
    <>
      <TitleSession title="Project detail" />

      <ReturnButton history="/projects" />

      <div className={style.projectDetail}>
        <div className={style.projectName}>{project.name}</div>
        <div className={style.projectDescription}>{project.description}</div>

        <div className={style.projectOwnerArea}>
          <div className={style.smallSectionTitle}>Owner Profile:</div>

          <div className={style.projectOwner}>
            {avatarUrl && (
              <img
                alt={`${username}'s avatar`}
                className={style.projectOwnerAvatar}
                height={100}
                src={avatarUrl}
                width={100}
              />
            )}
            {project.owner.username}
          </div>

          <ButtonOpenLink
            link={project.owner.profile_url}
            text="See profile"
            className={style.ownerProfileButton}
          />
        </div>

        <div className={style.smallSectionTitle}>Technologies Used:</div>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <div className={style.smallSectionTitle}>Features:</div>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className={style.smallSectionTitle}>Installation:</div>
        <pre>
          <ReactMarkdown>{project.installation}</ReactMarkdown>
        </pre>

        <div className={style.repositoryArea}>
          <div className={style.smallSectionTitle}>Repository:</div>

          <ButtonOpenLink
            link={project.repository_url}
            text="View on GitHub"
            className={style.repositoryLinkButton}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;

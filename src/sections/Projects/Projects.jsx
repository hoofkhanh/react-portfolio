import styles from "./ProjectsStyles.module.css";
import spotifyImage from "../../assets/Spotify_App_Logo.svg.png";
import universityImage from "../../assets/Hoc-phi-dai-hoc-tai-nguyen-va-moi-truong-tphcm-2.png";
import soundService from "../../assets/sound-service.jpg";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={spotifyImage}
          link="https://github.com/hoofkhanh/springboot-music_web-root"
          h3="Spotify Clone"
          p="Web App"
        />
        <ProjectCard
          src={universityImage}
          link="https://github.com/hoofkhanh/springboot-quan_li_khoa_httt_vt"
          h3="Website for managing the deparment of it and remote senning"
          p="Web App"
        />
        <ProjectCard
          src={soundService}
          link="https://github.com/hoofkhanh/springboot-microservice-sound_service_web"
          h3="Sound Service Web (Microservice)"
          p="Web App"
        />
      </div>
    </section>
  );
};

export default Projects;

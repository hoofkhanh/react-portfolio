import styles from "./ProjectsStyles.module.css";
import spotifyImage from "../../assets/Spotify_App_Logo.svg.png";
import universityImage from "../../assets/Hoc-phi-dai-hoc-tai-nguyen-va-moi-truong-tphcm-2.png";
import furnitureImage from "../../assets/thiet-ke-logo-noi-that-dep-doc-la-voi-nhieu-uu-dai-5_1584000050.jpg";
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
          src={furnitureImage}
          link="https://github.com/hoofkhanh/springboot-furniture_store-root"
          h3="Furniture Shop"
          p="Web App"
        />
      </div>
    </section>
  );
};

export default Projects;

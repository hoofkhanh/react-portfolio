import styles from "./ProjectsStyles.module.css";
import spotifyImage from "../../assets/Spotify_App_Logo.svg.png";
import bv from "../../assets/bv-logo.png";
import xray from "../../assets/xray.jpg";
import soundService from "../../assets/sound-service.jpg";
import ProjectCard from "../../common/ProjectCard";
import peptide from "../../assets/peptide.png";
import artistCircle from "../../assets/artist-circle.jfif";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <h3 className="sectionTitle" style={{ color: "red" }}>
        Intern At 'Bệnh viện nhi đồng 2' 3 months. Perform small modules such as
        code debugging, code testing, learning hospital procedures, and coded
        the pneumonia prediction application under the guidance of the company's
        seniors.
      </h3>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={artistCircle}
          link="https://github.com/hoofkhanh/microservices-artist_circle_web"
          h3="Artist Circle Web (Microservice)"
          p="Web"
        />
        <ProjectCard
          src={peptide}
          link="https://github.com/hoofkhanh/transformer_xai_peptide"
          h3="Antimicrobial Peptide Prediction (Transformer + XAI + Amazon EC2)"
          p="AI"
        />
        <ProjectCard
          src={xray}
          link="https://github.com/hoofkhanh/pneumonia_prediction-vision_transformer"
          h3="Pneumonia Prediction Using Vision Transformer Model"
          p="Web (AI)"
        />
        <ProjectCard
          src={soundService}
          link="https://github.com/hoofkhanh/springboot-microservice-sound_service_web"
          h3="Sound Service Web (Microservice)"
          p="Web"
        />
        <ProjectCard
          src={spotifyImage}
          link="https://github.com/hoofkhanh/springboot-music_web-root"
          h3="Spotify Clone"
          p="Web"
        />
      </div>
    </section>
  );
};

export default Projects;

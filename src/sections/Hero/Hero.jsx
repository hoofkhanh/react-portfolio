import styles from './HeroStyles.module.css';
import heroImg from "../../assets/hero.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import  CV from "../../assets/CV.pdf";
import { useContext } from 'react';
import {ThemeContext} from '../../common/ThemeContext';


function Hero() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  let themeIcon = '';
  let twitterIcon = '';
  let githubIcon = '';
  let linkedinIcon = '';
  if(theme === 'light'){
    themeIcon = sun;
    twitterIcon = twitterLight;
    githubIcon = githubLight ;
    linkedinIcon = linkedinLight;
  }else{
    themeIcon = moon;
    twitterIcon = twitterDark;
    githubIcon = githubDark ;
    linkedinIcon = linkedinDark;
  }

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture of Hồ Khanh" />
        <img onClick={toggleTheme} className={styles.colorMode} src={themeIcon} alt="Color mode icon"  />
      </div>
      <div className={styles.info}>
        <h1>Hồ <br /> Khanh</h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://twitter.com" target='_blank' >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.coms" target='_blank' >
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com" target='_blank' >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>Hồ Tuấn Khanh đến từ TP.Hồng Ngự tỉnh Đồng Tháp.</p>
        <a href={CV} download>
          <button className="hover" >
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero;

import styles from "./SkillsStyles.module.css";
import checkMarkLight from "../../assets/checkmark-light.svg";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import {ThemeContext} from "../../common/ThemeContext";
import { useContext } from "react";

const Skills = () => {
  const {theme} = useContext(ThemeContext);

  const checkMarkIcon = theme === 'light'? checkMarkLight : checkMarkDark;

  return ( 
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="JAVA" />
        <SkillList src={checkMarkIcon} skill="PYTHON (AI)" />
        <SkillList src={checkMarkIcon} skill="Tensorflow" />
        <SkillList src={checkMarkIcon} skill="Spring boot" />
        <SkillList src={checkMarkIcon} skill="Spring cloud" />
        <SkillList src={checkMarkIcon} skill="JS" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Boostrap" />
      </div>
      <hr  />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Postgresql" />
        <SkillList src={checkMarkIcon} skill="MySql" />
        <SkillList src={checkMarkIcon} skill="SqlServer" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git (basic)" />
        <SkillList src={checkMarkIcon} skill="Docker (basic)" />
      </div>
    </section>
   );
}
 
export default Skills;
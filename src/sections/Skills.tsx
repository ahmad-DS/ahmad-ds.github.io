import styles from "./Skills.module.css";
import  { skills } from "../data/skills.json";
import TechnicalSkillCard from "../components/TechnicalSkillCard";
export default function Skills() {
    const {technical, soft} = skills;
    console.log(soft);
    return (
        <div id="skills" className={styles.skills}>
            <h1>My Skills</h1>

            <div>
                <h2>{technical.title}</h2>
                {
                    technical.categories.map(skill => (
                        <TechnicalSkillCard skill={skill} />
                    ))
                }
            </div>
            <div>

            </div>
        </div>
    )
}
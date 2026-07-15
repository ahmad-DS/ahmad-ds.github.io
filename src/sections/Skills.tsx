// import styles from "./Skills.module.css";
// import  { skills } from "../data/skills.json";
// import TechnicalSkillCard from "../components/TechnicalSkillCard";
// export default function Skills() {
//     const {technical, soft} = skills;
//     console.log(soft);
//     return (
//         <section id="skills" className={styles.skills}>
//             <h1>My Skills</h1>

//             <div>
//                 <h2>{technical.title}</h2>
//                 {
//                     technical.categories.map(skill => (
//                         <TechnicalSkillCard skill={skill} />
//                     ))
//                 }
//             </div>
//             <div>

//             </div>
//         </section>
//     )
// }

import styles from "./Skills.module.css";
import { skills } from "../data/skills.json";
import TechnicalSkillCard from "../components/TechnicalSkillCard";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const { technical, soft } = skills;

  return (
    <section id="skills" className={styles.skills}>
      <h1 className={styles.sectionTitle}>My Skills</h1>

      <div className={styles.skillsDashboard}>
        {/* Technical Skills Column */}
        <div className={styles.technicalColumn}>
          <h2 className={styles.columnTitle}>{technical.title}</h2>
          <div className={styles.technicalGrid}>
            {technical.categories.map((category, index) => (
              <TechnicalSkillCard key={index} skill={category} />
            ))}
          </div>
        </div>

        {/* Soft Skills Column */}
        <div className={styles.softColumn}>
          <h2 className={styles.columnTitle}>
            <Sparkles className={styles.titleIcon} size={22} />
            {soft.title}
          </h2>
          <div className={styles.softList}>
            {soft.items.map((item, index) => (
              <div key={index} className={styles.softItem}>
                <CheckCircle2 className={styles.checkIcon} size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
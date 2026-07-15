// interface Skill {
//   name: string;
//   items: string[];
// }
// interface TechnicalSkillCardProps {
//   skill: Skill;
// }
// export default function TechnicalSkillCard({ skill }: TechnicalSkillCardProps) {
//   return (
//     <div>
//       <h2>{skill.name}</h2>
//       {skill.items.map((item) => (
//         <label htmlFor="">[{item}]</label>
//       ))}
//     </div>
//   );
// }

import styles from "./TechnicalSkillCard.module.css";
import { 
  Code2, 
  Monitor, 
  Cpu, 
  Database, 
  Wrench, 
  Brain,
  type LucideIcon 
} from "lucide-react";

interface Skill {
  name: string;
  items: string[];
}

interface TechnicalSkillCardProps {
  skill: Skill;
}

// Map category names to matching Lucide icons dynamically
const iconMap: Record<string, LucideIcon> = {
  "Languages": Code2,
  "Frontend": Monitor,
  "Backend": Cpu,
  "Databases": Database,
  "Tools & Technologies": Wrench,
  "Concepts": Brain,
};

export default function TechnicalSkillCard({ skill }: TechnicalSkillCardProps) {
  // Fallback to Code2 icon if category name doesn't match
  const IconComponent = iconMap[skill.name] || Code2;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <IconComponent className={styles.cardIcon} size={20} />
        <h3>{skill.name}</h3>
      </div>
      <div className={styles.badgeContainer}>
        {skill.items.map((item, index) => (
          <span key={index} className={styles.badge}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
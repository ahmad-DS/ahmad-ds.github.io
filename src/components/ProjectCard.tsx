// import styles from "./ProjectCard.module.css"
// interface ProjectCardProps {
//     title: string;
//     description: string;
//     image: string;
//     technologies: string[];
// }
// const ProjectCard: React.FC<ProjectCardProps> = ({title, description,image, technologies}) => {
//     return (
//         <div className={styles.gridCard}>
//             <img src={image} alt="Not Available" />
//             <title>{title}</title>
//             {technologies.map(tech => (
//                 <label htmlFor={tech}>[{tech}]</label>
//             ))}
//             <p>{description}</p>
//         </div>
//     )

// }

// export default ProjectCard

import styles from "./ProjectCard.module.css";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string; // Added mandatory live/deployment link
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveLink,
}) => {
  return (
    <div className={styles.gridCard}>
      {/* Image Wrapper for zoom effect */}
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.projectImage} />
      </div>

      {/* Content Container */}
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{title}</h3>

        {/* Tech Badges */}
        <div className={styles.techContainer}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>

        <p className={styles.projectDescription}>{description}</p>

        {/* Mandatory Live Deployment Link */}
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.liveButton}
        >
          <span>Live Demo</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
import styles from "./ProjectCard.module.css"
interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
}
const ProjectCard: React.FC<ProjectCardProps> = ({title, description,image, technologies}) => {
    return (
        <div className={styles.gridCard}>
            <img src={image} alt="Not Available" />
            <title>{title}</title>
            {technologies.map(tech => (
                <label htmlFor={tech}>[{tech}]</label>
            ))}
            <p>{description}</p>
        </div>
    )

}

export default ProjectCard
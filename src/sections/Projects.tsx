import styles from "./Projects.module.css";
import { projects } from "../data/projects.json"
import ProjectCard from "../components/ProjectCard";
export default function Projects() {
    console.log("projcts", projects)
    return (
        <div id="projects" className={styles.projects}>
            <h1>My Projects</h1>
            <div className={styles.gridContainer}>
                {projects.map(project => (
                    <ProjectCard {...project}/>
                ))}
            </div>
        </div>
    )
}
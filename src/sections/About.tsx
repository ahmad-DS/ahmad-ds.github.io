import styles from "./About.module.css";
import { timeline } from "../data/about.json";
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h1>About me</h1>
      {timeline.map((exp) => (
        <>
          <h2>
            {exp.year} - {exp.title}
          </h2>
          <h3>{exp.subtitle}</h3>
          <p>{exp.description}</p>
        </>
      ))}
    </section>
  );
}

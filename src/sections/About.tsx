import styles from "./About.module.css";
import { timeline } from "../data/about.json";
import TimelineCard from "../components/TimelineCard";
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h1>About me</h1>
      <div className={styles.timelineContainer}>
        {timeline.map((exp) => (
          <TimelineCard {...exp} />
        ))}
      </div>
    </section>
  );
}

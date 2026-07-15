import styles from "./Home.module.css";
export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.leftCol}>
        <h1>Hi, I am Shakil Ahmad</h1>
        <p>
          Full Stack Developer with 2.5+ years of experience, passionate about
          building scalable backend systems, clean APIs, and high-quality
          software that solves real-world problems.
        </p>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.imageCard}>
          <img
            src="https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

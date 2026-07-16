// 
import styles from "./Home.module.css";
import { FileDown } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      {/* Left Column: Text Content */}
      <div className={styles.leftCol}>
        <h1 className={styles.name}>Hi, I am Shakil Ahmad</h1>
        <p className={styles.intro}>
          Full Stack Developer with 2.5+ years of experience, passionate about
          building scalable backend systems, clean APIs, and high-quality
          software that solves real-world problems.
        </p>
        
        {/* Resume Button - satisfying the mandatory requirement */}
        <a 
          href="/ShakilAhmadUpdated.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.resumeButton}
        >
          <FileDown size={18} />
          <span>View Resume</span>
        </a>
      </div>

      {/* Right Column: Profile Image */}
      <div className={styles.rightCol}>
        <div className={styles.imageCard}>
          <img
            src="/images/profile2.jpeg"
            alt="Shakil Ahmad Profile"
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}
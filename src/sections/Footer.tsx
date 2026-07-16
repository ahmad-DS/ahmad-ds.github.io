import styles from "./Footer.module.css";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Left Side: Copyright & Motto */}
        <div className={styles.left}>
          <span className={styles.logo}>
            SA<span className={styles.accentDot}>.</span>
          </span>
          <p className={styles.copyright}>
            © {currentYear} Shakil Ahmad. All rights reserved.
          </p>
        </div>

        {/* Middle: Fast Navigation Links */}
        <div className={styles.middle}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Side: Social Media & Scroll to Top */}
        <div className={styles.right}>
          <div className={styles.socials}>
            <a href="mailto:ahmad.shakil444@gmail.com" title="Email">
              <Mail size={18} />
            </a>
            <a href="https://linkedin.com/in/shakil-ahmad-6b3a79126" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://github.com/ahmad-ds" target="_blank" rel="noopener noreferrer" title="GitHub">
              <GithubIcon size={18} />
            </a>
          </div>

          <button onClick={scrollToTop} className={styles.scrollTopButton} aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
}
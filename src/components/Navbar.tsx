// import styles from "./Navbar.module.css"
// function Navbar() {
//     return (
//         <div className={styles.container}>
//             <div>
//                 Logo
//             </div>
//             <div className={styles.flexItem2}>
//                 <div><a href="#home">Home</a></div>
//                 <div><a href="#about">About</a></div>
//                 <div><a href="#skills">Skills</a></div>
//                 <div><a href="#projects">Projects</a></div>
//                 <div><a href="#contact">Contact</a></div>
//                 <div><a href="#resume">Resume</a></div>
//             </div>
//         </div>
//     )
// }

// export default Navbar;


import styles from "./Navbar.module.css";
import { Download } from "lucide-react";

function Navbar() {
  return (
    <nav className={styles.container}>
      {/* Brand Logo / Name */}
      <div className={styles.logo}>
        SA<span className={styles.accentDot}>.</span>
      </div>

      {/* Navigation Links */}
      <div className={styles.flexItem2}>
        <div className={styles.navLink}><a href="#home">Home</a></div>
        <div className={styles.navLink}><a href="#about">About</a></div>
        <div className={styles.navLink}><a href="#skills">Skills</a></div>
        <div className={styles.navLink}><a href="#projects">Projects</a></div>
        <div className={styles.navLink}><a href="#contact">Contact</a></div>
        
        {/* Mandatory Special Resume Link */}
        <div className={`${styles.navLink} ${styles.resumeLink}`}>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            download="Shakil_Ahmad_Resume.pdf"
          >
            <span>Resume</span>
            <Download size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
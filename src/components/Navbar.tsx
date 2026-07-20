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
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Programmatically trigger a hidden download action
    const downloadLink = document.createElement("a");
    downloadLink.href = "/Shakil_Ahmad_Resume.pdf";
    downloadLink.download = "Shakil_Ahmad_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // 2. Do NOT run e.preventDefault() here! 
    // Letting the native click continue allows target="_blank" to fire normally,
    // which handles cleanly opening the preview in the new tab.
  };
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
            href="/Shakil_Ahmad_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleResumeClick}
            // download="Shakil_Ahmad_Resume.pdf"
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
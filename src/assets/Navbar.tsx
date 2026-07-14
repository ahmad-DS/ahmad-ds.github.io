import styles from "./Navbar.module.css"
function Navbar() {
    return (
        <div className={styles.container}>
            <div>
                Logo
            </div>
            <div className={styles.flexItem2}>
                <div><a href="#home">Home</a></div>
                <div><a href="#about">About</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#projects">Projects</a></div>
                <div><a href="#contact">Contact</a></div>
                <div><a href="#resume">Resume</a></div>
            </div>
        </div>
    )
}

export default Navbar;
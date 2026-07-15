import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Mail, Send, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // basic client side confirmation for testing
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={styles.contact}>
      <h1 className={styles.sectionTitle}>Get In Touch</h1>

      <div className={styles.contactDashboard}>
        {/* Left Column: Interactive Form */}
        <div className={styles.formColumn}>
          <h2 className={styles.columnTitle}>
            <MessageSquare className={styles.titleIcon} size={22} />
            Send a Message
          </h2>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message details..."
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>Send Message</span>
              <Send size={16} />
            </button>
            {status && <p className={styles.statusText}>{status}</p>}
          </form>
        </div>

        {/* Right Column: Direct Channels Grid */}
        <div className={styles.linksColumn}>
          <h2 className={styles.columnTitle}>Connect Elsewhere</h2>
          <p className={styles.linksIntro}>
            Whether you want to discuss an open software engineering role, collaborate on a project, or just say hi, feel free to reach out.
          </p>

          <div className={styles.linksGrid}>
            <a href="mailto:ahmad.shakil444@gmail.com" className={styles.linkCard}>
              <Mail className={styles.linkIcon} size={24} />
              <div>
                <h3>Email</h3>
                <p>ahmad.shakil444@gmail.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/shakil-ahmad-6b3a79126" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
              <LinkedinIcon className={styles.linkIcon} size={24} />
              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/shakil-ahmad-6b3a79126</p>
              </div>
            </a>

            <a href="https://github.com/ahmad-ds" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
              <GithubIcon className={styles.linkIcon} size={24} />
              <div>
                <h3>GitHub</h3>
                <p>github.com/ahmad-ds</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
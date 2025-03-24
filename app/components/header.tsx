import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Example social icons
import styles from './Header.module.css'; // Create this CSS module file

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo (Left) */}
      <div className={styles.logo}>
        <a href="/">Your Logo</a> {/* Replace "Your Logo" with your actual logo (e.g., an image or text) */}
      </div>

      {/* Navigation Links (Middle) */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/about" className={styles.navLink}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href="/skills" className={styles.navLink}>Skills</a>
          </li>
          <li className={styles.navItem}>
            <a href="/projects" className={styles.navLink}>Projects</a>
          </li>
        </ul>
      </nav>

      {/* Social Media (Right) */}
      <div className={styles.social}>
        <a href="https://github.com/yourusername" className={styles.socialIcon} aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" className={styles.socialIcon} aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourusername" className={styles.socialIcon} aria-label="Twitter">
          <FaTwitter />
        </a>
        {/* Add more social media links as needed */}
      </div>
    </header>
  );
};

export default Header;
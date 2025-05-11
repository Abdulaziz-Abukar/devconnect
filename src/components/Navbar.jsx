// Reusable UI Component
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ComponentStyles/NavBar.module.css";

export function NavBar() {
  return (
    <header className={styles.headerWrapper}>
      <img src="Pando.png" alt="Pando, the DevConnect Mascot" />
      <nav className={styles.navBar}>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="feed">Feed</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="createpost">Create Post</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

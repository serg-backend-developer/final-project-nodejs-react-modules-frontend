import * as React from "react";
import styles from "./Footer.module.css";
import SocialMediaLinks from "./SocialMediaLinks";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <Link to="/" className={styles.footerLogo} aria-label="Go to homepage">
          foodies
        </Link>
        <SocialMediaLinks />
      </div>
      <div className={styles.divider} />
      <p className={styles.copyright}>@2024, Foodies. All rights reserved</p>
    </footer>
  );
}

export default Footer;

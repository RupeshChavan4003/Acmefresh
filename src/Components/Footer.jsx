import React from "react";
import styles from "../CSS/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div
        className={styles.footerMain}
        style={{ width: "80%", justifyItems: "center" }}
      >
        <div className={styles.singleDiv}>
          <p className={styles.subHead}>
            Have questions? Please feel free to write to us at
            info@acmefresh.com. We love to hear from you. Stay connected.
          </p>
        </div>
        <div className={styles.singleDiv}>
          <div>
            <p className={styles.subHead}>COMPANY</p>
            <p>About Us</p>
            <p>Projects</p>
            <p>Services</p>
          </div>
        </div>
        <div className={styles.singleDiv}>
          <p className={styles.subHead}>SERVICES</p>
          <p>FAQ</p>
          <p>Blog</p>
          <p>News & Media</p>
          <p>Contact us</p>
        </div>
        <div>
          <p className={styles.heading}>INDIAS</p>
          <p className={styles.subHeading}>FASTEST</p>
          <p className={styles.heading}>GROWING</p>
          <p className={styles.subHeading}>COMMERCIAL</p>
          <p className={styles.heading}>HYDROPHONIC</p>
          <p className={styles.subHeading}>FARM SPECIALIST</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

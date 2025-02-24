import React from "react";
import styles from "../styles/Banner.module.css";
import bannerImage from "../assets/banner.webp";
import maleModel from "../assets/male model.png";
import femaleModel from "../assets/women model.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* 📌 Background Image */}
      <img src={bannerImage} alt="Banner" className={styles.bannerImage} />

      {/* 📌 Moving Text */}
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <span className={styles.movingText}>
            <span className={styles.bold}>SPECIALLY </span>
            <span className={styles.outline}>HANDPICKED </span>
            <span className={styles.bold}>FOR </span>
            <span className={styles.italicOutline}>YOU</span>
          </span>
    
        </div>
      </div>

      {/* 📌 Models (Always on Top) */}
      <img src={maleModel} alt="Male Model" className={styles.maleModel} />
      <img src={femaleModel} alt="Female Model" className={styles.femaleModel} />
    </div>
  );
};

export default Banner;

import React from "react";
import styles from "./about.module.css";
import Hello from "../../Resource/hello.png";
import Rainbow from "../../Resource/rainbow.png";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div className={styles.head}>Welcome to our new Website</div>
          <div className={styles.image_box}>
            <img src={Hello} alt="Hello World" />
          </div>
          <div className={styles.link}>
            <a href="#">LEARN ABOUT VIRGINAMERICA.COM</a>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.head}>
            Deals from $49 to your favorite cities
          </div>
          <div className={styles.image_box}>
            <img src={Rainbow} alt="Rainbow" />
          </div>
          <div className={styles.link}>
            <a href="#">SEE ALL DEALS</a>
          </div>
        </div>
      </div>
    </div>
  );
}

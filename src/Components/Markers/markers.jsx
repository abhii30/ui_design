import React from "react";
import styles from "./markers.module.css";
export default function Markers() {
  return (
    <div className={styles.container}>
      <input type="radio" name="type" id="#1" />
      <label for="#1">Round Trip</label>
      <input type="radio" name="type" id="#2" />
      <label for="#2">One Way</label>
      <input type="radio" name="type" id="#3" />
      <label for="#3">Multi City</label>
      <div className={styles.bottom_line}></div>
    </div>
  );
}

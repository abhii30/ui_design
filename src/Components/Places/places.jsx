import React from "react";
import styles from "./places.module.css";
export default function Places() {
  const places = [
    {
      place: "Las Vegas",
      country: "ny",
      code: "las",
    },
    {
      place: "Las Vegas",
      country: "ny",
      code: "las",
    },
    {
      place: "Las Vegas",
      country: "ny",
      code: "las",
    },
    {
      place: "Las Vegas",
      country: "ny",
      code: "las",
    },
    {
      place: "Las Vegas",
      country: "ny",
      code: "las",
    },
    {
      place: "Las Vegas",
      country: "ny",
      code: "las",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        Book from <span>San Francisco</span> to
      </div>
      <div className={styles.places}>
        {places.length > 0
          ? places.map((e, index) => {
              return (
                <div className={styles.card} key={index}>
                  <div className={styles.place}>{e.place}</div>
                  <div className={styles.details}>
                    {e.country} ({e.code})
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

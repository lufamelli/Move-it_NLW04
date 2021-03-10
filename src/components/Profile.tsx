import styles from "../styles/components/Profile.module.css";
import { useContext, useState, useEffect } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="moveit.jpg" alt="Profile picture" />
      <div>
        <strong>lufamelli</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

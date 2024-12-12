import React from "react";
import styles from "./NewUsers.module.css";
import NewUsersChart from "./NewUsersChart";
import Card from "./Card";

const NewUsers = () => {
  return (
    <div className={styles.activeUsersContainer}>
      <NewUsersChart />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>New Users</h3>
          <p>
            <span className={+4 > 0 ? styles.green : styles.red}>+10%</span>{" "}
            users this week
          </p>
        </div>
        <div className={styles.cards}>
          {/* <Card /> */}
          
        </div>
      </div>
    </div>
  );
};

export default NewUsers;

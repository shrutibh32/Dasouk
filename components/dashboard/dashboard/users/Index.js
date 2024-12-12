import React from "react";
import styles from "./Index.module.css";
import Info from "./information/Info";
import NewUsers from "./new-users/NewUsers";

const Users = () => {
  return (
    <div className={styles.users}>
      <Info />
      <NewUsers />
    </div>
  );
};

export default Users;

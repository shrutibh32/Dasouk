"use client"; // This directive ensures the component is treated as a Client Component

import React, { useEffect, useState } from "react";
import styles from "./Statusbar.module.css";
import StatusbarItem from "./StatusbarItem";

const Statusbar = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch("/api/users/");
        const data = await response.json();
        setUserCount(data.totalUsers);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchUserCount();
  }, []);

  return (
    <div className={styles.statusbar}>
      <StatusbarItem
        title={"Total Money"}
        type={"money"}
        price={40000}
        percent={+40}
      />
      <StatusbarItem
        title={"Total Sales"}
        type={"sales"}
        price={175000}
        percent={+10}
      />
      <StatusbarItem
        title={"All Users"}
        type={"users"}
        price={userCount}
        
      />
      {/* <StatusbarItem
        title={"All Clients"}
        type={"clients"}
        price={25}
        percent={-20}
      /> */}
    </div>
  );
};

export default Statusbar;

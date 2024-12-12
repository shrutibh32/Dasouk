"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Layout.module.css";
import Navbar from "@/components/dashboard/Navigation/Navbar";
import Profile from "@/components/dashboard/Navigation/Profile";
import MyContext from "@/store/context/MyContext";

const Layout = (props) => {
  const context = useContext(MyContext);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(window.innerWidth < 1024);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        {(!isMobileView || context.isDashboardOpen) && (
          <nav className={styles.navbar}>
            <Navbar shops={props.shops}/>
            <Profile user={props.user} isMobileView={isMobileView} />
          </nav>
        )}
        <div className={styles.dashboard}>{props.children}</div>
      </div>
    </main>
  );
};

export default Layout;

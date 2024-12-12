"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../public/svg/navbar/Logo";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import MyContext from "@/store/context/MyContext";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(true);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const path = usePathname();
  const context = useContext(MyContext);

  useEffect(() => {
    setIsMobileView(window.innerWidth < 1000);
  }, []);

  const toggleMenu = () => {
    setIsNavbarOpen((prev) => !prev);

    context.isDashboardOpen ? context.toggleDashboard() : "";
  };

  const { data: session, status } = useSession();

  return (
    <nav className={styles.navbar}>
      {path.split("/")[1] === "dashboard" &&
        (context.isDashboardOpen ? (
          <IoClose
            className={styles.menuIcon}
            onClick={context.toggleDashboard}
          />
        ) : (
          <IoMenu
            className={styles.menuIcon}
            onClick={() => {
              context.toggleDashboard();
              isNavbarOpen && toggleMenu();
            }}
          />
        ))}
      <Link href={"/"} className={styles.logo}>
        <Logo />
      </Link>
      {isNavbarOpen ? (
        <IoClose className={styles.menuIcon} onClick={toggleMenu} />
      ) : (
        <IoMenu className={styles.menuIcon} onClick={toggleMenu} />
      )}
      {(!isMobileView || isNavbarOpen) && (
        <ul className={styles.navList}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <div className={styles.products}>
              {!isMobileView && "Products"}
              <div className={styles.dropdown}>
                <ul>
                  <li>
                    <Link href={"/products/b2b"}>B 2 B</Link>
                  </li>
                  <li>
                    <Link href={"/products/b2c"}>B 2 C</Link>
                  </li>
                  <li>
                    <Link href={"/products/dropshipping"}>Dropshipping</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/blogs"}>Blogs</Link>
          </li>
          {status === "authenticated" && (
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
          )}
          {status === "authenticated" ? (
            <li className={styles.userMenu}>
              <FaUserCircle
                className={styles.userIcon}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div className={styles.userDropdown}>
                  <p>{session.user.email}</p>
                  <button
                    onClick={() => signOut({ callbackUrl: '/auth' })}
                    className={styles.logoutBtn}
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <Link href={"/auth"}>
              <button className={styles.loginBtn}>LOGIN</button>
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

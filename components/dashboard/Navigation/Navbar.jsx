import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import Home from "@/public/svg/dashboard/navbar/Home";
import Analytics from "@/public/svg/dashboard/navbar/Analytics";
import Billing from "@/public/svg/dashboard/navbar/Billing";
import Setting from "@/public/svg/dashboard/navbar/Plugin";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MyContext from "@/store/context/MyContext";
import ShopDropdown from "@/components/ui/dashboard/ShopDropdown";
import { TiMinus, TiPlus } from "react-icons/ti";

const Navbar = (props) => {
  const pathname = usePathname();
  const [showShops, setShowShops] = useState(false);
  const context = useContext(MyContext);

  const closeDashboard = () => {
    context.toggleDashboard();
    setShowShops(false);
  };

  const toggleShopsDisplay = () => {
    setShowShops((prev) => !prev);
  };

  return (
    <ul className={styles.navlist}>
      <Link href={"/dashboard"} onClick={closeDashboard}>
        <li
          className={
            pathname === "/dashboard" && !showShops ? styles.active : ""
          }
        >
          <div>
            <Home
              color={
                pathname === "/dashboard" && !showShops ? "white" : "#1A1F37"
              }
            />
          </div>
          Dashboard
        </li>
      </Link>
      <li
        className={showShops ? styles.active : ""}
        onClick={toggleShopsDisplay}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "7px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div>
            <Analytics color={showShops ? "white" : "#1A1F37"} />
          </div>
          Shops
        </span>
        <div className={styles.shopListIcon}>
          {showShops ? <TiMinus /> : <TiPlus />}
        </div>
      </li>
      {showShops && <ShopDropdown shops={props.shops} />}
      <Link href={"/dashboard/billing"} onClick={closeDashboard}>
        <li
          className={
            pathname === "/dashboard/billing" && !showShops ? styles.active : ""
          }
        >
          <div>
            <Billing
              color={
                pathname === "/dashboard/billing" && !showShops && !showShops
                  ? "white"
                  : "#1A1F37"
              }
            />
          </div>
          Billing
        </li>
      </Link>
      <Link href={"/dashboard/plugin"} onClick={closeDashboard}>
        <li
          className={
            pathname === "/dashboard/plugin" && !showShops ? styles.active : ""
          }
        >
          <div>
            <Setting
              color={
                pathname === "/dashboard/plugin" && !showShops
                  ? "white"
                  : "#1A1F37"
              }
            />
          </div>
          Plugin
        </li>
      </Link>
    </ul>
  );
};

export default Navbar;

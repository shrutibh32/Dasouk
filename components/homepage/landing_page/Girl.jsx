// "use client";
// import { useEffect, useState } from "react";
import styles from "./Girl.module.css";
import GirlSvg from "@/public/svg/homepage/landing-page/deliveryObjects/GirlSvg";
import GirlsMessage from "@/public/svg/homepage/landing-page/deliveryObjects/GirlsMessage";
import Truck from "@/public/svg/homepage/landing-page/deliveryObjects/Truck";
import Box from "@/public/svg/homepage/landing-page/deliveryObjects/Box";
import TruckShutter from "@/public/svg/homepage/landing-page/deliveryObjects/TruckShutter";
import Smoke from "@/public/svg/homepage/landing-page/deliveryObjects/Smoke";

const Girl = () => {
  // const [width, setWidth] = useState(0);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  // if (width < 450) {
  //   return;
  // }

  return (
    <>
      <div className={styles.girl}>
        <GirlSvg />
      </div>
      <div className={styles.message}>
        <GirlsMessage />
      </div>
      <div className={styles.box}>
        <Box />
      </div>
      <div className={styles.truck}>
        <Truck />
      </div>
      <div className={styles.shutter}>
        <TruckShutter />
      </div>
      <div className={styles.smoke}>
        <Smoke />
      </div> 
    </>
  );
};

export default Girl;

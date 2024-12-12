"use client";
import React, { useEffect, useState } from "react";
import styles from "./Index.module.css";
import LandingPage from "./landing_page/Index";
import Features from "./features/Index";
import Solutions from "./solutions/Index";
import HomeBlogs from "./blogs/Index";
import TagsSlider from "./taglines/Index";
import BusinessLogo from "../ui/photoSlider/Index";
import CompanyLogo from "../ui/photoSlider/Index";
import Clothing from "../../public/images/businessImages/1.png";
import Shoes from "../../public/images/businessImages/2.png";
import Jewellery from "../../public/images/businessImages/3.png";
import Sarees from "../../public/images/businessImages/4.png";
import Sofa from "../../public/images/businessImages/5.png";
import Computer from "../../public/images/businessImages/6.png";
import Pottery from "../../public/images/businessImages/7.png";
import Shopping from "../../public/images/businessImages/8.png";
import Perfume from "../../public/images/businessImages/9.png";
import Cake from "../../public/images/businessImages/10.png";
import Makeup from "../../public/images/businessImages/11.png";
import Gym from "../../public/images/businessImages/12.png";
import Car from "../../public/images/businessImages/13.png";
import Plate from "../../public/images/businessImages/14.png";
import Hotel from "../../public/images/businessImages/15.png";

import A from "../../public/images/companyLogo/1.png";
import B from "../../public/images/companyLogo/2.png";
import C from "../../public/images/companyLogo/3.png";
import D from "../../public/images/companyLogo/4.png";
import E from "../../public/images/companyLogo/5.png";
import F from "../../public/images/companyLogo/6.png";
import G from "../../public/images/companyLogo/7.png";
import H from "../../public/images/companyLogo/8.png";
import I from "../../public/images/companyLogo/9.png";
import J from "../../public/images/companyLogo/10.png";
import K from "../../public/images/companyLogo/11.png";
import L from "../../public/images/companyLogo/12.png";
import M from "../../public/images/companyLogo/13.png";
import N from "../../public/images/companyLogo/14.png";
import O from "../../public/images/companyLogo/15.png";
import P from "../../public/images/companyLogo/16.png";
import Q from "../../public/images/companyLogo/17.png";

const business = [
  Clothing,
  Shoes,
  Jewellery,
  Sarees,
  Sofa,
  Computer,
  Pottery,
  Shopping,
  Perfume,
  Cake,
  Makeup,
  Gym,
  Car,
  Plate,
  Hotel,
];

const companyLogo = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q];

const Index = () => {
  const [mobile, setMobile] = useState(false);
  const [tab, setTab] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 600);
    setTab(window.innerWidth > 600 && window.innerWidth < 900);
  }, []);

  return (
    <main className={styles.main}>
      <LandingPage />
      <CompanyLogo
        images={companyLogo}
        height={"60px"}
        slides={mobile ? 3 : tab ? 4 : 6}
        type={"logo"}
      />
      <Features />
      <BusinessLogo
        images={business}
        height={"120px"}
        slides={mobile ? 2 : tab ? 3 : 5}
        type={"business"}
      />
      <Solutions />
      <TagsSlider />
      <HomeBlogs />
    </main>
  );
};

export default Index;

import React from 'react'
import styles from "../b2b/Index.module.css";
import LandingPage from "./LandingPage";
import Companies from "../b2b/companies/Index";
import Features from "./features/Index";
import OtherService from './OtherService/Index';
import Newsletter from "../../ui/newsletter/Index";
import Tabs from './tabs/Index';
import Review from '../b2b/reviews/Index';

const Dropshiping = () => {
  return (
    <main className={styles.main}>
      <LandingPage />
      <Companies />
      <Features />
      <Tabs />
      <OtherService />
      <Newsletter />
      <Review />
    </main>
  )
}

export default Dropshiping
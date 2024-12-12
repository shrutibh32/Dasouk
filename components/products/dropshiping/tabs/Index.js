import React from "react";
import styles from "./Index.module.css";
import TabsComponent from "@/components/Tabs/Index";

const Tabs = () => {
    return (
        <div className={styles.tabs}>
            <p>Lorem ipsum dolor consectetur adipiscing elit</p>


            {/* Tabs Components */}
            <TabsComponent items={items} />
        </div>
    );
}
export default Tabs;

const items = [
    {
        title: "Tab 1", content: (
            <div className={styles.tabComponent}>
                <h1 className={styles.tabTitle}>Title 1</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates eveniet in temporibus earum eum quam veritatis doloremque, sed aliquid?
                </p>
            </div>)
    },
    {
        title: "Tab 2", content: (
            <div className={styles.tabComponent}>
                <h1 className={styles.tabTitle}>Title 2</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing e Libero voluptates eveniet in temporibus earum eum quam veritatis doloremque, sed aliquid?
                </p>
            </div>)
    },
    {
        title: "Tab 3", content: (
            <div className={styles.tabComponent}>
                <h1 className={styles.tabTitle}>Title 3</h1>
                <p>
                    Loremdolor sit amet consectetur adipisicing elit. Libero voluptates eveniet in temporibus earum eum quam veritatis doloremque, sed aliquid?
                </p>
            </div>)
    },
    {
        title: "Tab 4", content: (
            <div className={styles.tabComponent}>
                <h1 className={styles.tabTitle}>Title 4</h1>
                <p>
                    Lorem ipsum dolor sit amet  Libero voluptates eveniet in temporibus earum eum quam veritatis doloremque, sed aliquid?
                </p>
            </div>)
    },
]
"use client"
import {useState,useRef , useEffect} from 'react'
import styles from "./Index.module.css";

const TabsComponent = ({items}) => {
  const [selectedTab , setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() =>{
    firstBtnRef.current.focus();
  },[]);
  return (
    <div className={styles.Tab}>
        <div className={styles.Tabs}>
            <div className={styles.TabsIndividual}>
              {items.map((item,index)=>(
                <button 
                ref={index===0 ? firstBtnRef : null}
                key={index} 
                onClick={() => setSelectedTab(index)}
                className={styles.button}>{item.title}</button>
              ))}
            </div>
            <div>
              {items.map((item,index) => (
                <div className={`${selectedTab === index ? '' : styles.hidden}`}>
                  {item.content}
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default TabsComponent
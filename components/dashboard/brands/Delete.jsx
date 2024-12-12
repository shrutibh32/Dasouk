"use client"
import React from 'react';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import styles from "./Bill.module.css";
import { useRouter } from "next/navigation";

const Delete = (props) => {
    const router = useRouter();

    const handleClick = async (e) => {
        e.preventDefault();
    
        let a = await JSON.stringify({
          id: props.id
        });
    
        alert(a);
        console.log(props.customize);
    
        try {
          const res = await fetch("/api/mongodb/brand/", {  // Note the corrected endpoint
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: a,
          });
          
          router.refresh();
        } catch (e) {
          alert(e);
        }
    };

    return (
        <AiFillDelete onClick={handleClick} className={styles.delete} />
    );
};

export default Delete;

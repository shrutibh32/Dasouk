"use client";
import React, { useEffect, useState } from "react";
import styles from "./ShopListTable.module.css";

const ShopListTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from your API route
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orderslist"); // Update this to your actual API endpoint
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <h4>Order ID</h4>
        <h4>Total Price</h4>
        
        <h4>Date</h4>
      </div>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div className={styles.listItem} key={order._id}>
            <p>{order._id}</p>
            <p>₹ {order.totalPrice ? order.totalPrice.toLocaleString("en-IN") : "N/A"}</p>
            <p>{order.customerName}</p> {/* Assuming you have customerName field */}
            <p>{new Date(order.orderDate).toLocaleDateString()}</p> {/* Assuming you have orderDate field */}
          </div>
        ))
      ) : (
        <p>No orders available</p>
      )}
    </div>
  );
};

export default ShopListTable;

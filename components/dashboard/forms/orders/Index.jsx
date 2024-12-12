"use client";
import React from "react";
import "./Index.css"; // Import your normal CSS file

const Index = () => {
  return (
    <div className="container">
      <h1>Order Management</h1>
      <table className="orderTable">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Shop ID</th>
            <th>Order Date</th>
            <th>Total Amount</th>
            <th>Currency</th>
            <th>Order Status</th>
            <th>Payment Method</th>
            <th>Shipping Address</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with actual data rows */}
          <tr>
            <td>Example Customer ID</td>
            <td>Example Shop ID</td>
            <td>Example Date</td>
            <td>Example Amount</td>
            <td>Example Currency</td>
            <td>Example Status</td>
            <td>Example Method</td>
            <td>Example Address</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Index;

import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    customer_id: { type: String, required: true },
    shop_id: { type: String, required: true },
    order_date: { type: Date, default: Date.now },
    total_amount: Number,
    currency: String,
    order_status: String,
    payment_method: String,
    shipping_address: String,
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;

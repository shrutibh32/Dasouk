import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema({
    order_id: { type: String, required: true }, // Reference to order document
    product_id: { type: String, ref: "Product", required: true }, // Reference to product document
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
  },
  { timestamps: true });
  
  const OrderItem = mongoose.models.OrderItem || mongoose.model("OrderItem", orderItemSchema);
  
  export default OrderItem;
  
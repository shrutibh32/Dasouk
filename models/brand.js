import mongoose, { Schema } from "mongoose";

const brandSchema = new Schema({
  sid: { type: String, required: true },
  brand_name: { type: String, required: true },
},
{ timestamps: true });

const Brand = mongoose.models.Brand || mongoose.model("Brand", brandSchema);

export default Brand;

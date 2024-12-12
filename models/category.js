import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  sid: { type: String, required: true }, 
  category_name: { type: String, required: true },
},
{ timestamps: true });

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;

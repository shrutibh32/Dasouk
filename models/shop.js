import mongoose, { Schema } from "mongoose";

const shopsSchema = new Schema(
    {
        sid: String,
        uid: String,
        shopname: String,
        shopport: Number,
        website_url: String,
        shopdescription: String,
    },
    {
      timestamps: true,
    }
  );

const Shops = mongoose.models.Shops || mongoose.model("Shops", shopsSchema);

export default Shops;
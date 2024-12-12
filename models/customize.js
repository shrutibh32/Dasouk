import mongoose, { Schema } from "mongoose";

const customizeSchema = new Schema({
  sid:String,
  shop: {
    bannerTitle: String,
    bannerSubTitle: String,
    bannerDescription: String,
    bannerImage: String,  // Placeholder for actual image URL
    showCategories: Boolean,
    showTopProducts: Boolean,
    showSale: Boolean,
    showBestSellers: Boolean,
    sale: {
      title: String,     // Placeholder for actual title
      description: String, // Placeholder for actual description
      image: String      // Placeholder for actual image URL
    }
  },
  brand: {
    mission: String,
    logo: String,
    primaryColor: String,
    secondaryColor: String,
    tertiaryColor: String,
    textColor: String
  },
  contactUs: {
    showGoogleMap: Boolean,
    locationGoogle: String, // Optional: Embed Google Maps code
    locationText: String,
    phoneNo: String,
    email: String
  }
},
{ timestamps: true });
  
  const Customize = mongoose.models.Customization || mongoose.model("Customization", customizeSchema);
  
  export default Customize;
  
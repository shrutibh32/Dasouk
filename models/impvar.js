import mongoose, { Schema } from "mongoose";

const impvarSchema = new Schema(
    {
        portno: Number
    },
    {
      timestamps: true,
    }
  );

const ImpVar = mongoose.models.ImpVar || mongoose.model("ImpVar", impvarSchema);

export default ImpVar;
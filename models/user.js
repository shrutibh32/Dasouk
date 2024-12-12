import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
    {
        uid: String,
        googleid: String,
        username: String,
        email: String,
        phone: String,
        password: String,
        firstname: String,
        lastname: String,
        profilephoto: String,
        isverified: Boolean,
        googleid: String,
        created_at: Date,
        updated_at: Date,
    },
    {
      timestamps: true,
    }
  );

const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);

export default Users;
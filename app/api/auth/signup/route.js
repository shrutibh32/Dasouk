import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectMongoDB(); // Connect to MongoDB

    const { name, email, password } = await request.json();

    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ success: false, message: 'User already exists.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new Users({
      email,
      username: name,
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    });

    await newUser.save();

    // Return the success response with redirect URL
    return new Response(
      JSON.stringify({
        success: true,
        message: 'User registered successfully.',
       // redirectTo: `/auth/signin?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(
      JSON.stringify({ success: false, message: 'An error occurred. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET(request) {
  return new Response('Method Not Allowed', { status: 405 });
}

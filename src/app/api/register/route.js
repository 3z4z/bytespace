import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import User from "@/app/models/User";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    await dbConnect();

    //check existed user
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({
        success: false,
        message: "User email already in use.",
        status: 400,
      });
    }

    //post a new user
    const hashedPass = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPass,
    });
    return NextResponse.json({
      success: true,
      message: "User registration successful!",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Registration failed",
      error: error.message,
      status: 500,
    });
  }
}

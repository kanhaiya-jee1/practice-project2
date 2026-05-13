import connectDb from "@/lib/db";
import User from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    await connectDb();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists!" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters!" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
       name, email,password: hashedPassword
    })

    return NextResponse.json(
      user,
      {status:400}
    )

  } catch (error) {
    return NextResponse.json(
      { message: `register error ${error}` },
      { status: 500 }
    );
  }
}
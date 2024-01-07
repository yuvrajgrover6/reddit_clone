import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
export async function POST(request: Request) {
  const { username, password } = await request.json();
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });

  if (user === null) {
    return NextResponse.json({
      status: 401,
    });
  }

  const res = await compare(password, user.password);
  if (!res) {
    return NextResponse.json({
      status: 401,
    });
  }

  const token = jwt.sign(
    { _id: user.id?.toString(), name: user.username },
    "TEMPKEY",
    {
      expiresIn: "2 days",
    }
  );

  return NextResponse.json({
    user: user,
    token: token
  });
}

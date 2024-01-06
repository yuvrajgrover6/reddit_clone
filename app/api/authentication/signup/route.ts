import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { compare, hash } from "bcrypt";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const { email, password, name: username } = await req.json();
  const matchingUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (matchingUser !== null) {
    return NextResponse.json({
      status: 401,
    });
  }

  const user = await prisma.user.create({
    data: {
      email: email,
      password: await hash(password, 10),
      username: username,
    },
  });

  return NextResponse.json({
    user: user,
  });
}

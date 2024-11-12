import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();
  await prisma.korban.create({data : {nama : "Olav Thomas", no_telp : "0808", kata_sandi : "test", otp : ""}})
  const users = await prisma.korban.findMany();
  return Response.json({users});
}

export async function POST(request : NextRequest) {
    const data = await request.json();
    console.log(data);
    return Response.json({message : "success"})
}

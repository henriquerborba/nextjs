import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);

    const chat = await prisma.chat.create({
        data: {
            message: body.message,
        },
    });

    return NextResponse.json(chat);
}

export async function GET(request: NextRequest) {
    const chats = await prisma.chat.findMany();

    return NextResponse.json(chats);
}

import { NextResponse } from "next/server";
import { register } from "@/lib/register";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const user = await register(form);
    return NextResponse.json({ message: "Usuário registrado!", user });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao registrar" }, { status: 400 });
  }
}

import { db } from "@/prisma/db";
import { registerSchema } from "@/lib/schema";
import bcrypt from "bcryptjs";

export const register = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validatedData = registerSchema.parse({ name, email, password });

  const hashedPassword = await bcrypt.hash(validatedData.password, 10);

  const user = await db.user.create({
    data: {
      name: validatedData.name,
      email: validatedData.email.toLowerCase(),
      password: hashedPassword,
    },
  });

  return user;
};

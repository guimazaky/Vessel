import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/prisma/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { loginSchema } from "@/lib/schema";
import bcrypt from "bcryptjs";

const adapter = PrismaAdapter(db);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedCredentials = loginSchema.parse(credentials);

        const user = await db.user.findFirst({
          where: {
            email: validatedCredentials.email,
          },
        });

        if (!user) throw new Error("Invalid credentials");

        const isPasswordValid = await bcrypt.compare(
          validatedCredentials.password,
          user.password!,
        );

        if (!isPasswordValid) throw new Error("Invalid credentials");

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

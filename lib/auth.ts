import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = "teste@teste.com";
        const password = "1234";

        if (credentials.email === email && credentials.password === password) {
          return { email, password };
        } else {
          throw new Error("Email ou senha inválidos!");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

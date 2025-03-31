import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { User } from "@/app/types/user";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: DBからデータを取得できるようにする．
        if (
          credentials?.email === "user@example.com" &&
          credentials.password === "password"
        ) {
          return {
            id: "1",
            email: credentials.email,
          } as User;
        }
        return null;
      },
    }),
  ],
  secret:
    process.env.NODE_ENV === "production"
      ? "cZuHMOlmxMngBOgl/OyCyq+LqOUzLwi+3mJgz0BUDTU="
      : undefined,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

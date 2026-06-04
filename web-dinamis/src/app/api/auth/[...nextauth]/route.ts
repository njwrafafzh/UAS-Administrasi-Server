import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { query } from "@/lib/db";

const handler = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const users = await query(
          "SELECT * FROM users WHERE email = ?",
          [credentials.email]
        );

        const user: any = Array.isArray(users) ? users[0] : null;
        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!passwordMatch) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = String(user.id);
        token.role = String(user.role || "admin");
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = String(token.id || "");
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };

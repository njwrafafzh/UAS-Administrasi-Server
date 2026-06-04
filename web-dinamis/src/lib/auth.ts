import type { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  interface User {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "credentials",
      type: "credentials",
      credentials: {},
      async authorize() {
        return null;
      },
    } as any,
  ],
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
};

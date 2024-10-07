import type { User as CustomUser } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginkey: { label: "loginkey", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const response = await fetch(`http://localhost:8888/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              loginkey: credentials.loginkey,
              password: credentials.password,
            }),
            credentials: "include",
          });

          const data = await response.json();
          console.log(data);

          if (response.ok && data.canLogin) {
            return {
              ...data.user,
              token: data.token,
              refreshToken: data.refreshToken,
            };
          } else {
            throw new Error(data);
          }
        } catch (error) {
          console.error("Error during login:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (user) {
        token.user = {
          ...user,
          token: (user as any).token,
          refreshToken: (user as any).refreshToken,
        };
      }

      if (trigger === "update") {
        token = { ...token, ...session };
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token.user as any; // Cast token.user as your custom User type
      return session;
    },
  },
  pages: {
    signIn: "/auth",
  },
  secret: "thisCanChange",
});

export { handler as GET, handler as POST };

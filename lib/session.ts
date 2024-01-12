import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  //   jwt: {
  //     encode: ({ secret, token }) => {},
  //     decode: ({ secret, token }) => {},
  //   },
  theme: { colorScheme: "light", logo: "/logo-icon.png" },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        // get the user from database and return it

        // create the new user if it doesn't exist
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
};
export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as SessionInterface;
  if (!session) return null;
  return session;
}

type Session = {};

interface SessionInterface extends Session {
  user: User & {
    id: string;
    email: string;
    name: string;
    profilePic: string;
  };
}

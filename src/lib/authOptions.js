import bcrypt from "bcryptjs";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import User from "@/app/models/User";
import dbConnect from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        try {
          await dbConnect();
          const { email, password } = credentials;
          const user = await User.findOne({
            email: email.trim().toLowerCase(),
          }).select("+password");
          if (!user) return null;
          const { password: userPassword } = user;
          const isSamePassword = await bcrypt.compare(password, userPassword);
          if (!isSamePassword) {
            return null;
          }
          if (user) {
            return {
              id: user._id.toString(),
              name: user.name,
              email: user.email,
            };
          } else {
            return null;
          }
        } catch (error) {
          return { error };
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await dbConnect();
      try {
        const existedUser = await User.findOne({ email: user?.email });
        if (existedUser) {
          user.isNewUser = false;
          return true;
        }
        await User.create({
          name: user.name,
          email: user.email,
          provider: "google",
        });
        user.isNewUser = true;
        return true;
      } catch (error) {
        return false;
      }
    },
    async jwt({ token, user }) {
      const email = token?.email || user?.email;
      if (email) {
        await dbConnect();
        const dbUser = await User.findOne({ email });
        if (dbUser && user) {
          token.id = dbUser._id.toString();
          token.name = dbUser.name;
          token.email = dbUser.email;
          token.role = dbUser.role;
          token.provider = dbUser.provider;
          token.isNewUser = user.isNewUser;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.provider = token.provider;
        session.user.isNewUser = token.isNewUser;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

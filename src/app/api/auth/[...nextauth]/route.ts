import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import axios from "axios";
import { NEXT_PUBLIC_URL_DB } from "@/app/helper/contant";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      async profile(profile) {
        try {
          await axios.post(`${NEXT_PUBLIC_URL_DB}/v1/auth`, {
            email: profile.email,
            providerID: profile.sub,
            name: profile.name,
            avatarUrl: profile.picture,
            token: null,
            provider: "google",
          });
        } catch (err) {
          console.error("Failed to save user:", err);
        }
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      async profile(profile) {                
        const avatarUrl = profile.picture?.data?.url ?? null;
        try {
          await axios.post(`${NEXT_PUBLIC_URL_DB}/v1/auth`, {
            email: `${profile.id}@facebook.local`,
            providerID: profile.id,
            name: profile.name,
            avatarUrl: avatarUrl,
            token: null,
            provider: "facebook",
          });
        } catch (err) {
          console.error("Failed to save user:", err);
        }
        return {
          id: profile.id,
          name: profile.name,
          image: avatarUrl,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };

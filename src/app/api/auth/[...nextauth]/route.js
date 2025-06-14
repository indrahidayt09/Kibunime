import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

const authOptions = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
      url: process.env.NEXTAUTH_URL,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

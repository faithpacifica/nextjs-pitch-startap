import NextAuth from "next-auth";

export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
});
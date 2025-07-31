import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { AUTHOR_BY_GITHUB_ID_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/write-client';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GitHubProvider({
			clientId: process.env.AUTH_GITHUB_ID!,
			clientSecret: process.env.AUTH_GITHUB_SECRET!,
		}),
	],
  //after successful authentication:
	callbacks: {
		// to check weather our user already exists in our DB or not and then depending on that to create
		async signIn({ user: { name, email, image }, profile }) {
			if (!profile) return false;
			const { id, login, bio } = profile as { id: string; login: string; bio?: string };

			const existingUser = await client
				.withConfig({ useCdn: false })
				.fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
					id,
				});

			if (!existingUser) {
				await writeClient.create({
					_type: 'author',
					id,
					name,
					username: login,
					email,
					image,
					bio: bio || '',
				});
			}

			return true;
		},
// add author id
		async jwt({ token, account, profile }) {
			if (account && profile) {
        //get user from sanity
				const user = await client
					.withConfig({ useCdn: false })
					.fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
						id: profile?.id,
					});

				token.id = user?._id;
			}

			return token;
		},
		async session({ session, token }) {
			Object.assign(session, { id: token.id });
			return session;
		},
	},
});

import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { prisma } from '@lucia-auth/adapter-prisma';
import { google } from '@lucia-auth/oauth/providers';
import { PRIVATE_GOOGLE_CLIENT_ID, PRIVATE_GOOGLE_CLIENT_SECRET } from '$env/static/private';
import { prisma as prismaClient } from '$lib/server/db/prisma';

const client = prismaClient;

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: prisma(client),

	getUserAttributes: (data) => {
		return {
			googleUsername: data.username
		};
	}
});

const url = dev ? ' http://localhost:5173' : process.env.VERCEL_URL;

export const googleAuth = google(auth, {
	clientId: PRIVATE_GOOGLE_CLIENT_ID,
	clientSecret: PRIVATE_GOOGLE_CLIENT_SECRET,
	redirectUri: `${url}/login/google/callback`
});

export type Auth = typeof auth;

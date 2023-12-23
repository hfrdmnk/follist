import { PrismaClient } from '@prisma/client';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	namespace Lucia {
		type Auth = import('$lib/server/db/lucia').Auth;
		// type DatabaseUserAttributes = {};
		// type DatabaseSessionAttributes = {};
	}
	// eslint-disable-next-line no-var
	var prismaDevClient: PrismaClient;
}

export {};

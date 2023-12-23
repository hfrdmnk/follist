// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import { PrismaClient } from '@prisma/client';

/// <reference types="lucia" />
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
	namespace Lucia {
		type Auth = import('$lib/server/db/lucia').Auth;
		type DatabaseUserAttributes = {
			username: string;
		};
		// type DatabaseSessionAttributes = {};
	}
	// eslint-disable-next-line no-var
	var prismaDevClient: PrismaClient;
}

export {};

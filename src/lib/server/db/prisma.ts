import { PrismaClient } from '@prisma/client';

const prisma = global.prismaDevClient || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
	global.prismaDevClient = prisma;
}

export { prisma };

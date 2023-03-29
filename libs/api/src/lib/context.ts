/* eslint-disable @typescript-eslint/no-unused-vars */
import {CreateFastifyContextOptions} from '@trpc/server/dist/adapters/fastify';
import {prisma} from '@poweruptime/db';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
  // session: Session | null
}

/**
 * Inner function for `createContext` where we create the context.
 */
export async function createContextInner(_opts: CreateContextOptions) {
  return {
    prisma,
  };
}

export async function createTRPCContext({req, res}: CreateFastifyContextOptions) {
  return await createContextInner({});
}

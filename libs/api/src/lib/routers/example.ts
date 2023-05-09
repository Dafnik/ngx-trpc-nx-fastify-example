import {z} from 'zod';
import {createTRPCRouter, publicProcedure} from '../trpc';

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({text: z.string()})).query(({input}) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),
  hello2: publicProcedure.query(({ctx}) => {
    return ctx.prisma.monitor.findMany();
  }),
});

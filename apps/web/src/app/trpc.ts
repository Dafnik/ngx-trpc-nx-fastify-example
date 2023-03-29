import {inject, InjectionToken, Provider} from '@angular/core';

import {httpBatchLink} from '@trpc/client';
import {createTRPCRxJSProxyClient} from 'ngx-trpc';
import superjson from 'superjson';
import type {AppRouter} from '@poweruptime/api';

export const TRPC_PROVIDER = new InjectionToken<ReturnType<typeof createTRPCRxJSProxyClient<AppRouter>>>('___TRPC_PROVIDER___');
export const provideTRPCClient = (): Provider => ({
  provide: TRPC_PROVIDER,
  useFactory: () =>
    createTRPCRxJSProxyClient<AppRouter>({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
        }),
      ],
    }),
});

export const injectTRPCClient = (): ReturnType<typeof createTRPCRxJSProxyClient<AppRouter>> => inject(TRPC_PROVIDER);

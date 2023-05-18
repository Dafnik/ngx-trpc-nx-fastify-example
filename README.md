# DISCONTINUED
ngx-trpc was moved to [analogjs/trpc](https://github.com/analogjs/analog/tree/main/packages/trpc)

# ngx-trpc-nx-fastify-example

## Features

* Type inheritance from Prisma to the API to the frontend Angular app
* Easy usage of trpc client in Angular components.
* Queue management via Bull.

## ngx-trpc

Example implementation of [ngx-trpc][ngx-trpc]

* Uses Angular's dependency injection and trpc's AppRouter type to provide a typesafe api.
* Provides an built-in client to convert trpc promises to observables and trpc [client links][trpc-links]
  and [data transformers][trpc-transformers]

## Run backend, frontend and bull runner 
```bash
npm run serve
```

[ngx-trpc]: https://github.com/Dafnik/ngx-trpc/

[trpc-links]: https://trpc.io/docs/links

[trpc-transformers]: https://trpc.io/docs/server/data-transformers
# Eagle's Wings Bridge

A web application built with [TanStack Start](https://tanstack.com/start), React, and Tailwind CSS, deployed on [Vercel](https://vercel.com).

## Deployment

This project is deployed to Vercel using the `vite` framework preset. All requests are rewritten to the `api/index` serverless function, which serves the TanStack Start SSR bundle.

### Why Node.js runtime (not Edge) is required

The `api/index` function runs on Vercel's **Node.js serverless runtime** (not Edge) because the TanStack Start SSR server bundle includes dependencies — such as `@tanstack/react-router/ssr/server`, `h3`/`srvx`, `seroval-plugins/web`, and `tailwind-merge` — that rely on Node.js APIs not available in Vercel's Edge runtime.

Running this function on Edge would cause a build-time error:

> The Edge Function "api/index" is referencing unsupported modules …

The Node.js runtime provides full compatibility for SSR rendering. Edge functions are only appropriate for lightweight, dependency-free handlers (e.g., redirects, auth checks).

## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

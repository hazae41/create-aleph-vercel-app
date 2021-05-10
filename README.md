# Aleph.js website + Node.js Vercel functions

Build an Aleph website that uses Node.js Vercel functions

## Live test

You can test this on: https://aleph.vercel.app/

This app is built with Aleph but its API uses Node.js

The content is retrieved from the API when you load the page

## How to

- Create a directory and open it
- Run `$ aleph init app`
- Create `app/dist` folder
- Remove `dist/` from `app/.gitignore`
- Create `app/dist/.gitignore` with
```
*
!.gitignore
```
- Create an `api` folder
- Run `$ vercel dev`

## Development

It runs well locally, you just have to run an Aleph process for the website and a Vercel process for the API

Run the website (in root folder): `$ aleph dev app` ([install aleph](https://alephjs.org/docs/get-started))

Run the API (in root folder): `$ vercel dev` ([install vercel CLI](https://vercel.com/cli))

## Deployment

Just use this configuration for your project on Vercel

Build command: `curl -fsSL https://deno.land/x/install/install.sh | sh && /vercel/.deno/bin/deno run -A https://deno.land/x/aleph/cli.ts build app`

Output directory: `app/dist`

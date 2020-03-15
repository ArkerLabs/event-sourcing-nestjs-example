## Description

CQRS + [Event Sourcing](https://github.com/ArkerLabs/event-sourcing-nestjs) using redis as a read database and mongo as a event source database.
All developed on top of NestJS using typescript.

If your looking for a GraphQL impl instead of an API Rest check this [repository](https://github.com/ArkerLabs/event-sourcing-nestjs-graphql-example).

## Installation

```bash
$ npm install
```

## Configuration

```bash
$ cp .env.example .env
```

Edit the file with your config data.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Where to start
You can starts by checking 'src/users/users.controller.ts' and 'src/auth/auth.controller.ts'.

## Reconstructing the view db

Just run 
```bash
npm run reconstruct-view-db
```

## Stay in touch

- Author - [Arker Labs](https://arkerlabs.com)

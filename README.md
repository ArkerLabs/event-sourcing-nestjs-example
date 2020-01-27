## Description

CQRS + Event Sourcing using redis as a read database and mongo as a event source database.
All developed on top of NestJS using typescript.

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
You can use the user's commands and queries via API REST, check src/users/users.controller.ts, or via graphql, http://localhost:3000/graphql. 

## Reconstructing the view db

Just run 
```bash
npm run reconstruct-view-db
```

## Stay in touch

- Author - [Arker Labs](https://arkerlabs.com)

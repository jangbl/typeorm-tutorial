# TypeORM tutorial with Node, Typescript and Postgres

This tutorial demonstrates how to use [TypeORM](https://typeorm.io/) together with [express.js](https://expressjs.com/) and [Typescript](https://www.typescriptlang.org/) to create a webserver.

It covers [TypeORM](https://typeorm.io/) migrations
TypeORM relations

- One-to-One [TypeORM](https://typeorm.io/) relation
- One-to-Many [TypeORM](https://typeorm.io/) relation
- Many-to-Many [TypeORM](https://typeorm.io/) relation

and demonstrates how to make use of [TypeORM](https://typeorm.io/) with an [express.js](https://expressjs.com/) webserver.

<h3 align="center">Please help this repo with a ⭐️ if you find it useful! 😁</h3>

This repository is contains the code for the [TypeORM tutorial playlist](https://www.youtube.com/playlist?list=PL1Nml43UBm6eNLgr12W4-WefGynGyWvbS)

[![TypeORM tutorial series](images/typeorm-tutorial.png)](https://www.youtube.com/playlist?list=PL1Nml43UBm6eNLgr12W4-WefGynGyWvbS)

Please also check out my website at [jangoebel.com](https://jangoebel.com)

## Project Setup

### 1. Install dependencies

Run

```
npm i
```

to install all dependencies.

### 2. Setup Database

This project requires that you run a [Postgres](https://www.postgresql.org/) database.
You can either set up a [Postgres](https://www.postgresql.org/) instance on your local machine
or use the [docker-compose](https://docs.docker.com/compose/) to spin up a database on the fly.

#### 2.1 Local Database setup

Install [Postgres](https://www.postgresql.org/) on your local machine and adjust the `ormconfig.json` file
with the `username`, `password` and `database name` that will work with your local [Postgres](https://www.postgresql.org/) instance.

If you are on Mac, you can install [Postgres](https://www.postgresql.org/) with [Homebrew](https://brew.sh/)

```
brew install postgres
```

and start it with:

```
brew services start postgres
```

The service can be stopped with:

```
brew services stop postgres
```

#### 2.2 Using docker-compose to start a Postgres database

This project comes with a `docker-compose` file that allows you to
spin up a [Postgres](https://www.postgresql.org/) database effortlessly.

Run:

```
docker-compose up
```

to start a [Postgres](https://www.postgresql.org/) `13` container whose port is mapped to port `5432` on your machine.

To stop the [Postgres](https://www.postgresql.org/) database Docker container, hit `Ctrl-C` on your keyboard. **Bear in mind that the container is now only stopped, but not removed - so the data is still there**.

To remove the container and all the data that you created in it for good, first stop it with `Ctrl-C` and then run:

```
docker-compose down
```

If you use this option, there is no need to change the `ormconfig.json` file - the server will be able to connect to the database without configuration changes.

### 3. Start express webserver

Run

```
npm run dev
```

to start up a your [express.js](https://expressjs.com/) server on pot `8080` with a hot reload functionality.
Ideal for development.

Run

```
npm start
```

to start the webserver on port `8080` without hot reload functionality.

# Useful commands:

This project was scaffoleded with the [TypeORM CLI](https://typeorm.io/#/using-cli).
For reference, the commands used in the tutorial can be found in `package.json` file in the `scripts` section:

```
"start": "ts-node src/index.ts",
"dev": "tsnd --respawn src/index.ts",
"init": "npx typeorm init --name typeorm-tutorial --database postgres --docker",
"migrate": "ts-node ./node_modules/typeorm/cli.js migration:run",
"revert": "ts-node ./node_modules/typeorm/cli.js migration:revert",
"generate": "ts-node ./node_modules/typeorm/cli.js migration:generate -n migration -p",
"generate-dry": "ts-node ./node_modules/typeorm/cli.js migration:generate -n migration -p --dr",
"make-migration": "npx typeorm migration:create -n migrationName"
```

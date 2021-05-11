import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import { smokeTest } from './smoke-test';

// https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module

createConnection()
  .then(async (connection) => {
    await connection.runMigrations();
    // tests out repo functionality
    // might be commented out
    await smokeTest(connection);

    // start server
    app.listen(8080, () => console.log('server running on port 8080'));
  })
  .catch((error) => console.log(error));

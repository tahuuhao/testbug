import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TSMigrationGenerator } from '@mikro-orm/migrations';
import { Configuration } from '@mikro-orm/core/utils/Configuration';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { User } from '@libs/entities/entities/User';

dotenv.config();

const getPath = (dir: string) => {
  switch (process.env.APP_CONTEXT) {
    case 'cli':
      return path.resolve(`libs/entities/src/${dir}`);
    case 'development':
      return path.resolve(`dist/libs/entities/src/${dir}`);
    case 'production':
      return path.resolve(`entities/src/${dir}`);
  }
};

const logger = new Logger('MikroORM');
const config: Options = {
  entities: [User],
  dbName: process.env.DB_NAME,
  type: process.env.DB_TYPE as keyof typeof Configuration.PLATFORMS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  highlighter: new SqlHighlighter(),
  debug: process.env.NODE_ENV === 'development',
  logger: logger.log.bind(logger),
  allowGlobalContext: true,
  migrations: {
    path: 'dist/libs/entities/migrations',
    pathTs: 'libs/entities/src/migrations',
    tableName: 'mikro_migrations',
    glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: false, // allow to disable table and column dropping
    snapshot: false, // save snapshot when creating new migrations
    emit: 'ts', // migration generation mode
    generator: TSMigrationGenerator, // migration generator, e.g. to allow custom formatting
  },
  seeder: {
    path: 'dist/libs/entities/seeders', // path to the folder with seeders
    pathTs: 'dist/libs/entities/seeders', // path to the folder with TS seeders (if used, we should put path to compiled files in `path`)
    defaultSeeder: 'DatabaseSeeder', // default seeder class name
    glob: '!(*.d).{js,ts}', // how to match seeder files (all .js and .ts files, but not .d.ts)
    emit: 'ts', // seeder generation mode
    fileName: (className: string) => className, // seeder file naming convention
  },
};

export default config;

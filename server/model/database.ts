import { PrismaD1 } from '@prisma/adapter-d1';
import { PrismaClient } from '@prisma/client';

export class Database {
  public client: PrismaClient;

  public constructor(db: D1Database) {
    const adapter = new PrismaD1(db);
    console.log('Initializing Prisma Client with D1 adapter');
    this.client = new PrismaClient({ adapter });
  }
}

import { PrismaD1 } from '@prisma/adapter-d1';
import { PrismaClient } from '@/generated/client';

export class Database {
  public client: PrismaClient;

  public constructor(db: D1Database) {
    const adapter = new PrismaD1(db);
    this.client = new PrismaClient({ adapter });
  }
}

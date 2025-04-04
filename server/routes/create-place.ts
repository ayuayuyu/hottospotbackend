import { D1Database } from '@cloudflare/workers-types';
import { Database } from '~/model/database';

export default defineEventHandler(async (event) => {
  const db = new Database(event.context.cloudflare.env.DB as D1Database);
  const newPlace = await db.client.place.create({
    data: {
      name: 'Test Place',
      latitude: 0,
      longitude: 0,
      category: 'Test Category',
      createdAt: new Date(),
    },
  });

  return {
    newPlace,
  };
});

export default defineEventHandler((event) => {
  const dbEnv = event.context.cloudflare?.env?.DB;

  if (!dbEnv) {
    console.error('DB not set in cloudflare.env');
    throw new Error('Database not configured');
  }

  const db = new Database(dbEnv as D1Database);
  return db.client.place.findMany();
});

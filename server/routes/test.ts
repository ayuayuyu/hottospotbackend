import { D1Database } from "@cloudflare/workers-types";
import { Database } from "~/model/database";

export default defineEventHandler((event) => {
  const db = new Database(event.context.cloudflare.env.DB as D1Database);
  return db.client.place.findMany();
});

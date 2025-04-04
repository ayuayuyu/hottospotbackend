
// import { PrismaD1 } from '@prisma/adapter-d1';
// import { PrismaClient } from '@prisma/client';

// export default defineEventHandler(async (event) => {
//   const env = event.context.env; // Nitro の context から `env` を取得
//   console.log('env', env);

//   const { cloudflare } = event.context;
//   console.log('cloudflare', cloudflare);

//   if (!env?.DB) {
//     return new Response('Database not found', { status: 500 });
//   }

//   const adapter = new PrismaD1(env.DB);
//   const prisma = new PrismaClient({ adapter });

//   try {
//     await prisma.place.create({
//       data: {
//         name: 'New Place',
//         latitude: 35.543534,
//         longitude: 128.4553545,
//         category: 'Restaurant',
//         createdAt: new Date(),
//       },
//     });

//     return new Response('Inserted', { status: 200 });
//   } catch (error) {
//     return new Response(`Error: ${error.message}`, { status: 500 });
//   }
// });

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const Place = await prisma.place.create({
    data: {
      name: 'Test Place',
      latitude: 0,
      longitude: 0,
      category: 'Test Category',
      createdAt: new Date(),
    },
  });

  return {
    Place,
  };
});

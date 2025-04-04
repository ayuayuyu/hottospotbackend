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
    Place: Place,
  };
});

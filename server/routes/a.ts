import { PrismaClient } from '@/generated/client';
const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const places = await prisma.place.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return {
    places,
  };
});

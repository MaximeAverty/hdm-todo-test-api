import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async function seeding() {
  await prisma.task.createMany({
    data: [
      { name: 'Faire à manger' },
      { name: 'Faire les courses' },
      { name: 'Faire le ménage' },
    ],
  });

  console.log('Database seeded');
})();

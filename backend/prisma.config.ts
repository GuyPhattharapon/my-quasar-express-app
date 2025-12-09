// prisma.config.ts
import 'dotenv/config';
import { defineConfig } from '@prisma/config';

export default defineConfig({
    schema: 'prisma/schema.prisma',
    migrations: {
        path: 'prisma/migrations',
    },
    datasource: {
        // อ่านค่า DATABASE_URL จาก .env
        url: process.env.DATABASE_URL!,
    },
});

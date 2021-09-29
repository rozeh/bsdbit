import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    busanit_service : {
        username: process.env.DATABASE_USER || 'rozeh',
        password: process.env.DATABASE_PASS || 'alfldkem1',
        database: process.env.DATABASE_NAME || 'busanit',
        host: process.env.DATABASE_HOST || 'busanit.com',
        port: process.env.DATABASE_PORT || '3306',
        dialect:'mysql'
    }
}
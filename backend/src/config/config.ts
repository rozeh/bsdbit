import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    busanit_service : {
        username: process.env.DATABASE_USER || 'dbmasteruser',
        password: process.env.DATABASE_PASS || '!!Solpami12',
        database: process.env.DATABASE_NAME || 'busanit',
        host: process.env.DATABASE_HOST || 'ls-7b42235d6b92101ef57020e2805f5580c0fcb438.ceoiy9rswaek.ap-northeast-2.rds.amazonaws.com',
        port: process.env.DATABASE_PORT || '3306',
        dialect:'mysql'
    }
}
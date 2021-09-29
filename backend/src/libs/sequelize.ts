import { Sequelize } from "sequelize";
import {config} from '../config/config'



console.log("데이터베이스 접속정보: ", process.env.DATABASE_NAME, process.env.DATABASE_USER,process.env.DATABASE_PASS,process.env.DATABASE_HOST)

// const database: Sequelize = new Sequelize(process.env.DATABASE_NAME, 'name', '', {
//     host: '',
//     dialect:'mysql',
//     define: {
//         timestamps:false
//     }
// });

export const sequelize: Sequelize = new Sequelize(
    config.busanit_service.database,
    config.busanit_service.username,
    config.busanit_service.password,
    {
        host:config.busanit_service.host,
        dialect:'mysql'
    }
)

export default sequelize;


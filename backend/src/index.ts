import Server from './server';
import ConsoleStamp from 'console-stamp';
import dotenv from 'dotenv';
import sequelize from './libs/sequelize'; 
import ObjectRelationMapping from './models';
// import { redis } from './libs/redis';

import asyncLogger from './utils/asyncLogger';

dotenv.config({ path:'.env' });
ConsoleStamp(console, {
    format: ':date(yyyy/mm/dd HH:MM:ss)'
})



try {
    (async () => {
        const server = new Server();
        const orm = new ObjectRelationMapping(sequelize)
        
        console.info('::: ROZEH VEDA DATABASE :::\n');
        await asyncLogger(
            'Sequelize Model list',
            'sub models are injectd',
            [orm.setSubModels()]
        )

        await asyncLogger(
            'Connection test',
            "Database has connected",
            [sequelize.sync({
                logging: false
            })]
        )

        // await asyncLogger(
        //     'Redis set',
        //     'Redis will be injected',
        //     [redis]
        // )
        
        await server.startServer();
    })()
} catch (error) {
    console.info(`::: ROZEH VEDA SERVER :::\n`);
    console.info('Server run has failed\n');
    console.log(`=>Error :: ${ error }`)
}
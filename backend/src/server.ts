import Koa, { Context } from 'koa';
import KoaRouter from 'koa-router';
import KoaBody from 'koa-body';
import KoaCors from 'koa-cors';
import KoaStatic from 'koa-static';
import KoaLogger from 'koa-logger';
import KoaRange from 'koa-range';

import api from './apis';


class Server {
    private app: Koa;
    private router: KoaRouter;

    constructor(){
        this.app = new Koa();
        this.router = new KoaRouter();
        
        this.setMiddlewares();
    }

    private setCors(): void {
        this.app.use(KoaCors({
            origin: '*',
        }))
    }

    private setSubURL(): void {
        this.router.use('/api', api.routes());
    }

    private setMiddlewares(): void {
        this.setSubURL();
        this.app.use(KoaRange);
        this.app.use(KoaLogger());
        this.app.use(KoaBody({ multipart: true }));
        this.app.use(KoaStatic('public'));
        this.setCors();
        this.app.use(this.router.routes())
        this.app.use(this.router.allowedMethods());
    }

    public PORT = process.env.SERVER_PORT;
    public startServer = async () => {
        this.app.listen(this.PORT, () => {
          console.info(`::: ROZEH VEDA SERVER:::\n`);
          console.info('- Server is running\n');
          console.log(`=> You can connecting with below urls\n`);
          console.info(`http://localhost:${this.PORT}`);
        });
      }
}

export default Server;
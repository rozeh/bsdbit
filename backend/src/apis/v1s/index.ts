import { Context } from 'koa';
import KoaRouter from 'koa-router';

import User from './users';
import Board from './posts';
import Docs from './docs';

class V1 {
    private router: KoaRouter;

    constructor() {
        this.router = new KoaRouter();

        this.setSubURL();
        this.setAPI();
    }

    private setSubURL(): void{
        this.router.use('/user', User.routes());
        this.router.use('/post', Board.routes());
        this.router.use('/docs', Docs.routes());
    }

    private setAPI(): void {
        this.router.get("/", (ctx: Context) => {
          ctx.status = 200;
          ctx.body = {
            message: "V1",
          };
        });
      }
    

    public getRouter(): KoaRouter {
        return this.router;
    }

}

export default new V1().getRouter();
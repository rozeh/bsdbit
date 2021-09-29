import KoaRouter from 'koa-router';
import { Context } from 'koa';
import DocsCtrl from './docs.ctrl';

class Docs {
    private router: KoaRouter;

    constructor() {
        this.router = new KoaRouter();

        this.setAPI();
    }

    private setAPI(): void {
        this.router.post('/create', DocsCtrl.create);
        this.router.get('/list', DocsCtrl.list);
        this.router.get("/", (ctx: Context) => {
            ctx.status = 200;
            ctx.body = {
              message: "확인 확인",
            };
          });
    }

    


    public getRouter(): KoaRouter {
        return this.router;
    }
}

export default new Docs().getRouter();
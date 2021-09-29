import KoaRouter from 'koa-router';

import UserCtrl from './user.ctrl';

class User {
    private router: KoaRouter;

    constructor() {
        this.router = new KoaRouter();

        this.setAPI();
    }

    private setAPI(): void {
        this.router.post('/register', UserCtrl.register);
        this.router.post('/login', UserCtrl.login);
        // this.router.post('/logout', UserCtrl.logout);
    }

    public getRouter(): KoaRouter {
        return this.router
    }
}

export default new User().getRouter();
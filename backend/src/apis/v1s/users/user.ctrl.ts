import { Context } from "koa";

import sequelize from '../../../libs/sequelize';
import { Token, Payload } from '../../../libs/token';
// import { saveSignOutToken } from '../../../libs/redis';

import Validate from '../../../utils/validate';
import { Password, EncryptedResult } from '../../../utils/password';

const sequelizeLib = sequelize;
const tokenLib = new Token();

const validateUtil = new Validate();
const passwordUtil = new Password();

class UserCtrl {
    public register = async ( ctx: Context ) => {
        const {
            email,
            password,
            passwordCheck,
            username
        } = ctx.request.body;

        if(validateUtil.check('email', email)){
            ctx.status = 400;
            ctx.body = {
                message: 'Fail',
                detail: 'Email validate check fail'
            };

            return;
        }

        if(validateUtil.check('password', password)){
            ctx.status = 400;
            ctx.body = {
                message: 'Fail',
                detail: 'Password validate check fail'
            };

            return;
        }

        if(password !== passwordCheck){
            ctx.status = 400;
            ctx.body = {
                message: 'Fail',
                detail: 'Password and password check value is not equal'
            }

            return;
        }

        if(validateUtil.check('username', username )){
            ctx.status = 400;
            ctx.body = {
                message: 'Fail',
                detail: 'username validate check fail'
            }

            return;
        }

        try {
            const encryptedResult: EncryptedResult = await passwordUtil.encryption(password);

            const [ data, status ] = await sequelizeLib.model('user').findOrCreate({
                where: {
                    email: email
                },
                defaults: {
                    password: encryptedResult.encryptedPassword,
                    salt: encryptedResult.salt,
                    username: username
                }
            });

            if(!status) {
                ctx.status = 409;
                ctx.body = {
                    message: 'Fail',
                    detail: 'Already registered email'
                };

                return;
            }

            ctx.status = 200;
            ctx.body = {
                message: 'Success',
                success: true,
                detail:'회원가입에 성공했습니다.'
            };

            return;
        }catch (error) {
            ctx.status = 500;
            ctx.body = {
                message: 'Fail',
                detail: error
            };

            return;
        }
    }

    public login = async ( ctx: Context ) => {
        const {
            email,
            password
        } = ctx.request.body;

        if(validateUtil.check('email', email)) {
            ctx.status = 400;
            ctx.body = {
                message: 'Fail',
                detail: 'Validate check fail'
            };

            return;
        }

        try {
            const data: any = await sequelizeLib.model('user').findOne({
                where: {
                    email
                }
            });

            if(!data) {
                ctx.status = 400;
                ctx.body = {
                    message: 'Fail',
                    detail: 'Not registered user'
                };

                return;
            }

            if(!(await passwordUtil.check(data.dataValues.salt, password, data.dataValues.password))) {
                ctx.status = 400;
                ctx.body = {
                    message: 'Fail',
                    detail: 'Email or password incorrect'
                };

                return;
            }
            const payload: Payload = {
                userId: data.dataValues.userId
            };

            const [accessToken, refreshToken] = await Promise.all([
                tokenLib.createAccessToken(payload),
                tokenLib.createRefreshToken(payload)
            ]);

            const username: string = data.dataValues.username

            ctx.status = 200;
            ctx.body = {
                message: 'Success',
                success: true,
                username: username,
                token: accessToken
            };

            return;

        } catch (error) {
            ctx.status = 500;
            ctx.body = {
                message: 'Fail',
                detail: error
            };

            return;
        }
    }

    // public logout = async ( ctx: Context ) => {
    //     const {
    //         accessToken
    //     } = ctx.request.body;

    //     try {
    //         const decodeAccessToken: any = await tokenLib.decodeToken(accessToken);

    //         await saveSignOutToken(decodeAccessToken.userId, accessToken);

    //         ctx.status = 200;
    //         ctx.body = {
    //             message: 'Successs'
    //         };

    //         return;

    //     } catch( error ) {
    //         ctx.status = 500;
    //         ctx.body = {
    //             message: 'Fail',
    //             detail: error
    //         }

    //         return;
    //     }
    // }

}

export default new UserCtrl();
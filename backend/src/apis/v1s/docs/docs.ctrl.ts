import { Context } from "koa";

import sequelize from '../../../libs/sequelize';
import Board from "../../../models/board";
import Docs from "../../../models/docs";

import Validate from '../../../utils/validate';

const sequelizeLib = sequelize;

const validateUtil = new Validate();

class DocsCtrl {
    public create = async (ctx: Context) => {
        const {
            boardId,
            docsuser,
            title,
            content,
            phoneNum
        } = ctx.request.body;

        const accessToken: any = ctx.headers.authorization;

        if(validateUtil.check('text', title) || validateUtil.check('text', content)) {
            ctx.status = 400;
            ctx.body = {
              message: 'Fail',
              detail: 'Not enough input'
            };
      
            return;
        }

        try {
            
            await sequelizeLib.model('docs').create({
                boardId,
                docsuser,
                title,
                content,
                phoneNum
            });

            ctx.status = 200;
            ctx.body = {
                message: 'Success'
            }

            return;
        }catch (error) {
            ctx.status = 500;
            ctx.body = {
                message: 'Fail',
                detail: error
            }
        }
    }
    public list = async (ctx: Context) => {


        try {
            const list = await sequelizeLib.model('docs').findAll();

            ctx.status = 200;
            ctx.body = {
                message: "Success",
                success: true,
                list
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
}

export default new DocsCtrl();
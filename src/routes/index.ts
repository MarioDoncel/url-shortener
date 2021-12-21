import { NextFunction, Request, Router,Response } from "express";
import {StatusCodes} from 'http-status-codes'
import URLController  from "../controllers/url.controller";

const routes = Router()


routes.get('/', (req: Request, res:Response, next: NextFunction) => {
    res.status(StatusCodes.OK).send('Application is running.')
})
routes.post('/shorten', URLController.shorten)
routes.get('/:hash', URLController.redirect)

export default routes
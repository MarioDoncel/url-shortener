import { NextFunction, Request, Response } from "express";
import shortid from 'shortid'
import envVariables from '../config/environment'
import { URLModel } from "../database/model/URL";

class URLShortener {
    public async shorten(req:Request, res:Response, next:NextFunction):Promise<void>{
        const {originalURL} = req.body

        const url = await URLModel.findOne({originalURL})
        if(url) {
            res.json(url)
            return
        }

        const hash = shortid.generate()
        const shortURL = `${envVariables.API_URL}/${hash}`
        
        const newUrl = await URLModel.create({originalURL, hash, shortURL})
        console.log(newUrl)
        res.json(newUrl)
    }
    public async redirect(req:Request, res:Response, next:NextFunction):Promise<void>{
        const {hash} = req.params
        const url = await URLModel.findOne({hash})
        if(!url) {
           res.status(400).send('URL not found')
           return
        }
        // const url = {
        //     originalURL: "http://example.com",
        //     hash: "PzDjS_uV5",
        //     shortURL: "https://localhost:5000/PzDjS_uV5"
        // }

        res.redirect(url.originalURL)
    }
}

export default new URLShortener
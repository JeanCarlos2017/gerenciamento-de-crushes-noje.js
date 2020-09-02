import * as jwt from 'jsonwebtoken';
import '../config/env';
import {response} from "express";

class FuncoesJWT{
    constructor() {}

    //gerar token
    getToken(req, res){
        //não recebe um corpo, qualquer um pode solicitar um token
        const token = jwt.sign({}, process.env.APP_SECRET, {
            expiresIn: '1d'
        })
        return res.status(200).json({ 'result': token });
    }


}


export default FuncoesJWT;
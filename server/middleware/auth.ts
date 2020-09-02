import {Request, Response, NextFunction} from "express";
import * as jwt from 'jsonwebtoken';

export const auth = async (request: Request, response: Response, nextFunction: NextFunction)=>{
    const authHeader = request.headers.authorization;
    if(!authHeader){
        return response.status(401).json({message: "Token é requerido"})
    }
    //Bearer 
    const [ ,token]= authHeader.split(' ');
    try{
        await jwt.verify(token, process.env.APP_SECRET);
        nextFunction();
    }catch (e) {
        return response.status(404).json(
        {message: "Token invalido! Por favor retorne para :: http://localhost:3000/api/token para obter um novo token"});
    }
}
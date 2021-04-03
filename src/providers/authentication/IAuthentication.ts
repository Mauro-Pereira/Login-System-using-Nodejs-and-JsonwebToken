import { Request, Response } from "express";

export interface IAuthentication{

    GenerateToken(params:{}): any;
    userAuthentication(user: any,response:Response,request:Request): any;
}
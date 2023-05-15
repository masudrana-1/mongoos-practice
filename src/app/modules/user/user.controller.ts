import { NextFunction, Request, Response } from "express";
import { createUserToDB } from "./user.service";


export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    // call service 
    const user = await createUserToDB();
    res.status(200).json({
        status: 'Success',
        data: user,
    });


}


//route ——> controller ——> service
import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";


// post api 
export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    // call service 
    const user = await createUserToDB();
    res.status(200).json({
        status: 'Success',
        data: user,
    });


}



// get api 
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {

    // call service 
    const user = await getUsersFromDB();
    res.status(200).json({
        status: 'Success',
        data: user,
    });


}


// for findOne controller 
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    const user = await getUserByIdFromDB(id);
    res.status(200).json({
        status: 'Success',
        data: user,
    });


}


//route ——> controller ——> service
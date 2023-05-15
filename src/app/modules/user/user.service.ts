// database logic 
// query 

import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async () => {
    // creating instance 

    const user = await new User(
        {
            id: '398993',
            role: "Student",
            password: 'mahabul',
            name: {
                firstName: 'mahabul',
                lastName: 'masud',
            },
            gender: "male",
            email: "mahabul@gmail.com",
            contactNo: '01610087778',
            emergencyContactNo: '01308158855',
            presentAddress: 'USA',
            permanentAddress: 'Bangladesh'
        }
    );
    await user.save();

    return user;
    // console.log(User);
};


export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
    return user;
}
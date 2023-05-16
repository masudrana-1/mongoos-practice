// database logic 
// query 

import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async () => {
    // creating instance 

    const user = await new User(
        {
            id: '39895657',
            role: "admin",
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

    // user.fullName();  //custom instance methods

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


// export const createNewUser = async (payload: IUser): Promise<IUser> => {
//     const user = new User(payload); // User -> class   |  user -> instance
//     await user.save(); // user -> instance   |   save() -> methods === build in instance methods
//     return user;
// }



// static methods 
export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}
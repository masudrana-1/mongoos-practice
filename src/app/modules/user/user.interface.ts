// interface 

import { HydratedDocument, Model } from "mongoose";





export interface IUser {
    id: string;
    role: "Student";
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
};



// custom methods 
export interface IUserMethods {
    fullName(): string;
}

// static methods
// interface UserModel extends Model<IUser> {
//     getAdminUsers(): IUser[];
// }


// static methods 
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
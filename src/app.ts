import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();

// using cors 
app.use(cors());

// parse data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req: Request, res: Response, next: NextFunction) => {

    //inserting a test data into mongodb

    /***************************
     * step 1: Interface
     * step 2: Schema
     * step 3: Model
     * step 4: Database Query on model   
    ****************************/

    // step 1: creating an interface 
    // interface IUser {
    //     id: string;
    //     role: "Student";
    //     password: string;
    //     name: {
    //         firstName: string;
    //         middleName?: string;
    //         lastName: string;
    //     };
    //     dateOfBirth?: string;
    //     gender: "male" | "female";
    //     email?: string;
    //     contactNo: string;
    //     emergencyContactNo: string;
    //     presentAddress: string;
    //     permanentAddress: string;
    // }


    //step 2: creating schema using interface 

    const userSchema = new Schema<IUser>({
        id: { type: String, required: true, unique: true },
        role: { type: String, required: true },
        password: { type: String, required: true },
        name: {
            firstName: { type: String, required: true },
            middleName: { type: String },
            lastName: { type: String, required: true }
        },
        dateOfBirth: { type: String },
        gender: { type: String, enum: ["male", "female"] },
        email: { type: String },
        contactNo: { type: String, required: true },
        emergencyContactNo: { type: String, required: true },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true }
    });

    // step 3: create model
    const User = model<IUser>('User', userSchema);


    // step 4: Database Query on model  
    // async function 
    const createUserToDB = async () => {
        // creating instance 

        const user = new User(
            {
                id: '7777',
                role: "Student",
                password: 'masudrana',
                name: {
                    firstName: 'Masud',
                    lastName: 'Rana',
                },
                gender: "male",
                email: "masud@gmail.com",
                contactNo: '01610087778',
                emergencyContactNo: '01308158855',
                presentAddress: 'USA',
                permanentAddress: 'Bangladesh'
            }
        );
        await user.save();

        console.log(User);
    };

    createUserToDB();


});







// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello World!');
//     next();
// })


export default app;
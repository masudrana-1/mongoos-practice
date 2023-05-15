import express, { Application } from 'express';
import cors from 'cors';

// application routes 
import userRouter from './app/modules/user/user.route';

const app: Application = express();

// using cors 
app.use(cors());

// parse data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



app.use('/api/v1/user', userRouter);







// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello World!');
//     next();
// })


export default app;
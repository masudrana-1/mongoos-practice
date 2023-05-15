import express from "express"
import { createUser } from "./user.controller";

const router = express.Router();

// route ---> controller 

router.get('/', createUser);

export default router;
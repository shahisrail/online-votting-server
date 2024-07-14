import express from 'express';
import { UserControllers } from './user.controler';


const router = express.Router();
router.post('/create-normalUser', UserControllers.createNormalUser);
// console.log(UserControllers.createNormalUser + ' created');

export const UserRoutes = router;

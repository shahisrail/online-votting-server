import express from 'express';
import { NormalUserControllers } from './nomalUser.controller';


const router = express.Router();

router.get('/', NormalUserControllers.getAllNormalUsers);

router.get('/:NormalUserId', NormalUserControllers.getSingleNormalUser);

export const NormalUserRouter = router;

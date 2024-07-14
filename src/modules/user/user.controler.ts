import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createNormalUser = async (req: Request, res: Response,  next: NextFunction,) => {
    try {
        const normalUserData = req.body;
        const result = await UserService.createNormalUserIntoDB(normalUserData);
        // res.status(200).json({
        //     success: true,
        //     message: 'Normal user is created successfully',
        //     data: result,
        // });
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Normal user is created successfully',
            data: result,
          });
    } catch (err) {
        // console.log(err);
        // res.status(500).json({
        //     success: false,
        //     message: 'An error occurred while creating the normal user',
        // });
        next(err);
    }
};

export const UserControllers = {
    createNormalUser,
};



import { NextFunction, Request, Response } from 'express';
import { NormalUserServices } from './nomalUser.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllNormalUsers = async (req: Request, res: Response , next:NextFunction) => {
    try {
        const result = await NormalUserServices.getAllNormalUserFromDB();

        res.status(200).json({
            success: true,
            message: 'NormalUsers are retrieved succesfully',
            data: result,
        });
    } catch (err) {
        next(err)
    }
};

const getSingleNormalUser = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const { normalUserId } = req.params;

        const result =
            await NormalUserServices.getSingleNormalUserFromDB(normalUserId);

        // res.status(200).json({
        //     success: true,
        //     message: 'NormalUser is retrieved succesfully',
        //     data: result,
        // });
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'NormalUser is retrieved succesfully',
            data: result,
          });
    } catch (err) {
        next(err)
    }
};

export const NormalUserControllers = {
    getAllNormalUsers,
    getSingleNormalUser,
};

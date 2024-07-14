import { normaluserModel } from './NormalUser.model';

const getAllNormalUserFromDB = async () => {
    const result = await normaluserModel.find();
    return result;
};

const getSingleNormalUserFromDB = async (id: string) => {
    const result = await normaluserModel.findOne({ id });
    return result;
};

export const NormalUserServices = {
    getAllNormalUserFromDB,
    getSingleNormalUserFromDB,
};

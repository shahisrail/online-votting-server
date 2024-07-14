import { TNormalUser } from '../normalUser/nomalUser.interface';
import { normaluserModel } from '../normalUser/NormalUser.model';



import { Tuser } from './user.interfaces';
import { User } from './user.model';

const createNormalUserIntoDB = async (normalUserData: TNormalUser) => {
    const userData: Partial<Tuser> = {};

    userData.role = 'NormalUser';

    userData.id = '2030100021211';
    // create a user
    const NewUser = await User.create(userData);
    // create a student
    if (Object.keys(NewUser).length) {
        // set id , _id as a user
        normalUserData.id = NewUser.id;
        normalUserData.user = NewUser._id; //reference _id

        const NewNormalUser = await normaluserModel.create(normalUserData);
        return NewNormalUser;
    }
};

export const UserService = {
    createNormalUserIntoDB,
};

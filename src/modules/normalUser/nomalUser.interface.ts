import { Types } from 'mongoose';

export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;
};
export type TNormalUser = {
    id: string;
    user: Types.ObjectId;
    name: UserName;
    gender: 'male' | 'female';
    email: string;
    profilePicture?: string;
    phoneNumber?: string;
    address?: string;
    lastLogin?: Date;
};

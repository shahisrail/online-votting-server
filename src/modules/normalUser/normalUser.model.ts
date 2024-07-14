import { Schema, model } from 'mongoose';
import { TNormalUser, UserName } from './nomalUser.interface';

const userNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        trim: true,
        maxlength: [20, 'Name can not be more than 20 characters'],
    },
    middleName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Last Name is required'],
        maxlength: [20, 'Name can not be more than 20 characters'],
    },
});

const normalUserSchema = new Schema<TNormalUser>(
    {
        id: {
            type: String,
            required: [true, ' ID is required'],
            unique: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            unique: true,
            ref: 'User',
        },
        name: {
            userNameSchema,
        },
        gender: {
            type: String,
            enum: {
                values: ['male', 'female', 'other'],
                message: '{VALUE} is not a valid gender',
            },
        },
        email: {
            type: String,
        },
        profilePicture: { type: String },
        address: { type: String },
        lastLogin: { type: String },
        phoneNumber: { type: String },
    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);
normalUserSchema.virtual('fullName').get(function () {
    return this.name.firstName + this.name.middleName + this.name.lastName;
});
export const normaluserModel = model<TNormalUser>(
    'NormalUser',
    normalUserSchema,
);

import { model, Schema } from 'mongoose';
import { Tuser } from './user.interfaces';
import { USER_ROLE, USER_STATUS } from './user.constant';

const UserSchema: Schema<Tuser> = new Schema(
    {
        id: {
            type: String,
            required: true,
        },

        role: { type: String,
            enum: ["admin" ,  "servay" , "NormalUser"],
         },
        password: { type: String,  },
        status: {
            type: String,
            enum: ['in-progress', 'blocked'],
            default: 'in-progress',
           
            
        },
        passwordChange: { type: Date },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

export const User = model<Tuser>('user', UserSchema);

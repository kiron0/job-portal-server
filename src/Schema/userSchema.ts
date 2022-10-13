import { Schema } from "mongoose";
import validator from "validator";
import PasswordValidator from "password-validator";

const passwordSchema = new PasswordValidator()
          .min(8)
          .has()
          .uppercase()
          .has()
          .lowercase()
          .has()
          .digits()
          .has()
          .not()
          .spaces();

export interface IUser extends Document {
          userName: string;
          email: string;
          password: string;
          role: string;
          firstName: string;
          lastName: string;
          phone: string;
          address: string;
          image: string;
          status: string;
          confirmationToken: string;
          confirmationTokenExpires: Date | string;
          passWordChangedAt: Date;
          passWordResetToken: string;
          passWordResetExpires: Date;
          _doc: any;
}

const UserSchema = new Schema<IUser>({
          userName: {
                    type: String,
                    required: true,
                    unique: true,
                    trim: true,
                    lowercase: true,
                    maxLength: [20, 'Username cannot be more than 20 characters'],
                    minLength: [3, 'Username cannot be less than 3 characters']
          },
          email: {
                    type: String,
                    required: true,
                    unique: true,
                    trim: true,
                    lowercase: true,
                    validate: [validator.isEmail, 'Please provide a valid email']
          },
          password: {
                    type: String,
                    required: true,
                    trim: true,
                    validate: {
                              validator: (password: string) => passwordSchema.validate(password),
                              message: 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'
                    }
          },
          role: {
                    type: String,
                    enum: ['candidate', 'admin', 'hr'],
                    default: 'candidate'
          },
          firstName: {
                    type: String,
                    required: true,
                    trim: true,
                    maxLength: [20, 'First name cannot be more than 20 characters'],
                    minLength: [3, 'First name cannot be less than 3 characters']
          },
          lastName: {
                    type: String,
                    required: true,
                    trim: true,
                    maxLength: [20, 'Last name cannot be more than 20 characters'],
                    minLength: [3, 'Last name cannot be less than 3 characters']
          },
          phone: {
                    type: String,
                    required: true,
                    trim: true,
                    maxLength: [20, 'Phone number cannot be more than 20 characters'],
                    minLength: [3, 'Phone number cannot be less than 3 characters']
          },
          address: {
                    type: String,
                    required: true,
                    trim: true,
          },
          image: {
                    type: String,
                    required: true,
                    validate: [validator.isURL, 'Please provide a valid image url'],
                    default: 'https://res.cloudinary.com/dzqkqzjxw/image/upload/v1600000000/avatars/default-avatar.png'
          },
          status: {
                    type: String,
                    enum: ['active', 'inactive'],
                    default: 'inactive'
          },
          confirmationToken: String,
          confirmationTokenExpires: Date,
          passWordChangedAt: Date,
          passWordResetToken: String,
          passWordResetExpires: Date
},
          {
                    timestamps: true
          });

export default UserSchema;
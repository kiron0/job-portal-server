import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/userModel";

// post data
const signUp = async (req: Request, res: Response) => {
  try {
    const {
      userName,
      email,
      password,
      role,
      firstName,
      lastName,
      phone,
      address,
    } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // create a 6 digit random number for confirmation token
    const confirmationToken = Math.floor(100000 + Math.random() * 900000);
    //  15 minutes from now
    const confirmationTokenExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
      role,
      firstName,
      lastName,
      phone,
      address,
      confirmationToken,
      confirmationTokenExpires,
    });

    const savedUser = await newUser.save();

    // send email
    const mailData = {
      to: savedUser.email,
      subject: "Confirm your email",
      html: `Hi  ${savedUser.firstName}  ,
          <p>Thanks for signing up with us. </p>
          <p> Your confirmation code is <strong>${confirmationToken}</strong> </p>      
          <p>Type the confirmation code on verification page or click on the link below</p>
          <a href="${req.protocol}://${req.get(
        "host"
      )}/api/v1/user/confirm?token=${confirmationToken}&email=${savedUser.email
        }">Confirm Email</a>
          <p>${req.protocol}://${req.get(
          "host"
        )}/api/v1/user/confirm?token=${confirmationToken}&email=${savedUser.email
        }</p> Or copy the link and paste it in your browser
          
          <p>Thanks</p>
          <p>If you didn't sign up with us, please ignore this email</p>
          `,
    };

    // send mail                  

    res.status(201).json({
      message: "User created successfully",
      status: 201,
      data: savedUser,
      mailData: mailData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const userRouter = {
  signUp
};
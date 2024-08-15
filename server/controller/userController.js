import User from "../model/userSchema.js";
import hashPassword from "./auth.js";

const signUpHandler = async (request, response) => {
    try {
        const { name, email, password, cpassword, userType } = request.body;

        if (!name) {
            return response.status(422).json({ error: "Please add name" });
        }

        if (!email) {
            return response.status(422).json({ error: "Please add email" });
        }

        if (!password || password.length < 6) {
            return response.status(422).json({ error: "Password must be at least 6 characters" });
        }

        if (password !== cpassword) {
            return response.status(422).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({email});
        if(user) {
            return response.status(422).json({ error: "Email already exists" });
        }
        
        // Now create user
        await User.create({
            name,
            email,
            password: await hashPassword(password),
            userType
        });
        response.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.log("Input Error or Server Error", error);
    }
}

export default signUpHandler;
import User from "../model/userSchema.js";

const signUpHandler = async (request, response) => {
    try {
        const { name, email, password, cpassword } = request.body;

        if (!name) {
            response.status(422).json({ error: "Please add name" });
        }

        if (!email) {
            response.status(422).json({ error: "Please add email" });
        }

        if (!password || password.length < 6) {
            response.status(422).json({ error: "Password must be at least 6 characters" });
        }

        if (password !== cpassword) {
            response.status(422).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({email});
        if(user) {
            response.status(422).json({ error: "Email already exists" });
        }
        
        // Now create user
        await User.create(request.body);
        response.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.log("Input Error or Server Error", error);
    }
}

export default signUpHandler;
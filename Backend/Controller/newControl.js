
const newModel = require("../Model/newModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//Signup
const Signup = async (req, res) => {
    try {
        const { Username, Email, Password } = req.body;

        const hashedPassword = await bcrypt.hash(Password, 10)
        const user = await newModel.create({ Username, Email, Password: hashedPassword });
        res.json(user);
    } catch (err) {
        res.json(err);
    }
};

//Login
const Login = async (req, res) => {


    try {
        const { Email, Password } = req.body;
        // Check if the user exists
        const user = await newModel.findOne({ Email });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {

            return res.status(400).json({ error: "Invalid password" });
        }

        // Generate token
        const token = jwt.sign({ id: user._id }, "your_secret_key");
        return res.json({ message: "Login successful", token });

    } catch (err) {
        // Log the error for debugging
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

//Dashboard
const Dashboard = async (req, res) => {
    try {
        const user = await newModel.find();
        res.status(200).json(user)

    }
    catch (err) {
        res.status(500).json(err)
    }

}

//Get data
const getId = async (req, res) => {
    try {
        const user = await newModel.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" })
        res.json(user)

    }
    catch (err) {
        res.status(500).json({ err: "Failed to fetch user" })
    }

};

//Update user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { Email } = req.body;
        const userUpdate = await newModel.findByIdAndUpdate(id, { Email }, { new: true });
        if (!userUpdate) {
            return res.status(404).json({ error: "User not found" })
        }
        res.status(200).json({ message: "User updated successfully", user: userUpdate })


    }
    catch (err) {
        console.error("error updating user", err);
        res.status(500).json({ err: "Failed to fetch user" })
    }

};

//Deleteuser
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        const userDelete = await newModel.findByIdAndDelete(id);
        if (!userDelete) {
            return res.status(404).json({ error: "User not found" })
        }
        res.status(200).json({ message: "User deleted successfully" })
    }
    catch (err) {
        console.error("error deleting user", err);
        res.status(500).json({ error: "Failed to fetch user" })
    }

};






module.exports = { Signup, Login, Dashboard, getId, updateUser, deleteUser };



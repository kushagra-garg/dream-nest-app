const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const user = require("../models/user");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/uploads/")
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({storage});

router.post("/register", upload.single("profileImage"), async(req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        const profileImage = req.file;
        if(!profileImage) {
            return res.status(400).send("No file uploaded");
        }

        const profileImagePath = profileImage.path;

        const existingUser = await user.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "No file uploaded"});
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new user({
            firstName,
            lastName,
            email,
            password: hashPassword,
            profileImagePath
        });
        await newUser.save();   

        res.status(200).json({message: "User Registered Successfully", user: newUser});
    }
    catch (err) {
        res.status(500).json({message: "Registration Failed", error: err.message});
    }
});

router.post("/login", async(req, res) => {
    try {
        const {email, password} = req.body;

        const u = await user.findOne({email});
        if(!u) {
            return res.status(400).json({message: "User doesn't exist"});
        }

        const isMatch = await bcrypt.compare(password, u.password);
        if(!isMatch) {
            return res.status(400).json({message: "Password is wrong"});
        }

        const token = jwt.sign({id: u._id}, process.env.JWT_SECRET_KEY);
        

        res.status(200).json({token, user: u});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({message: "Login Failed", error: err.message});
    }
});

module.exports = router;
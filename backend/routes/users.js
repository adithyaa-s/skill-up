const express = require("express");
const User = require("../model/users");
const axios = require("axios");
const { hashPassword, checkPassword } = require("../services/encryption");
const { generateToken, checkToken } = require("../services/authentication");
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        console.log("Recieved POST Request at Users/login");
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        console.log(email, password);
        if (!existingUser) {
            return res.status(404).json({ "Message": "User Not Found" });
        }
        const dbPassword = existingUser.password;
        const passwordMatch = await checkPassword(password, dbPassword);
        if (passwordMatch) {
            const token = await generateToken(existingUser);
            const auth = await checkToken(token);
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(400).json({ "Message": "Incorrect Password" });
        }
    } catch (error) {
        console.log("Error In Logging In", error);
    }
});

router.post("/signup", async (req, res) => {
    try {
        console.log("Recieved POST Request at Users/signup");
        const { email, password, firstname, lastname, occupation, phonenumber } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ "Message": "User Already Exists" });
        }
        const hashedPassword = await hashPassword(password);
        const newUser = new User({
            email: email,
            password: hashedPassword,
            firstname: firstname,
            lastname: lastname,
            occupation: occupation,
            phonenumber: phonenumber
        });
        await newUser.save();
        res.status(201).json({ "Message": "User Successfully Created" });
    }
    catch (error) {
        console.log("Error in Signing Up: ", error);
    }
});

router.post("/generate", async (req, res) => {
    try {
      console.log("Received POST Request at /generate");
      const { subtopics, openForMore } = req.body;
      console.log(subtopics); 
  
      if(!openForMore){
        const message = {
          contents: [
            {
              role: "user",
              parts: [{ text: `I have knowledge of these technolgies ${subtopics.join(', ')}.Let me know of career paths and more ways to master this. Please give me a career path or a roadmap that requires only these technolgies. Refer to resources online. Be detailed and refer sources, courses and projects.` }]
            }
          ]
        };
      }

      else if(openForMore==1){
        const message = {
          contents: [
            {
              role: "user",
              parts: [{ text: `I have knowledge of these technolgies ${subtopics.join(', ')}.  I'm willing to learn additional related technologies if that can lead to more career paths. Please give me a career path or a roadmap. Refer to resources online. Be detailed and refer sources, courses and projects.` }]
            }
          ]
        };
      }
      else if(openForMore==2){
      const message = {
        contents: [
          {
            role: "user",
            parts: [{ text: `Provide a detailed roadmap on the subtopics: ${subtopics.join(', ')}. Refer to resources online. Be detailed and refer sources, courses and projects.` }]
          }
        ]
      };
    }
  
      const aiApi = 'AIzaSyDI4W6p1hL1Icl15zG2wMR8ueKdm3Nkw0Y';
      const headers = {
        'Content-Type': 'application/json',
        'x-goog-api-key': aiApi
      };
      const apiEndpoint = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';
      const response = await axios.post(apiEndpoint, message, { headers });
      const generatedContent = response.data.candidates[0].content;
      console.log(generatedContent.parts);
      return res.status(200).json( generatedContent );
    } catch (error) {
      console.error('Error communicating with AI service:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  

module.exports = router;
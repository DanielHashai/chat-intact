const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(`mongodb+srv://chat-chat-yt-user:you4me121@cluster0.udbvwun.mongodb.net/?retryWrites=true&w=majority`).then(res=>console.log("Connected to MongoDB"))
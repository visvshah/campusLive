import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import markerRoutes from "./routes/markerRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import {config} from "dotenv";
import dotenv from "dotenv";
dotenv.config()
const app = express();
app.use(bodyParser.json({limit:'5mb', extended: true}));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false}));
app.use(cors());
app.use('/api/users', userRoutes)
app.use('/api/markers', markerRoutes);
console.log("URL: " + process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(4001, ()=> console.log(`Server runnning on port: 4001`)))
    .catch((error)=> console.log(error.message));
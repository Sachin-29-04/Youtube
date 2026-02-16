// require ('dotenv').config({path:'./env'}). // common js way
// import dotenv from "dotenv"
// dotenv.config({
//    path:"./.env"
//  })


import "dotenv/config";
import connectDB from "./db/index.js";

connectDB();

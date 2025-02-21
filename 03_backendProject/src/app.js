import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


//Configuration for middleware (app.use)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,                //Only frontend talk to backend
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",                                  // limit the json request
  })
);

app.use(
  express.urlencoded({                             // data come from url configuration
    extended: true,                                 // nested objects
    limit: "16kb",
  })
);

app.use(express.static("public"));                 //public assets (public folder in root) accesed by everyone

app.use(cookieParser());                           //to access the user bowser cookies 






//Routes import

import userRouter from "./routes/user.routes.js"



//Routes declerations

app.use("/api/v1/users",userRouter)


export { app };

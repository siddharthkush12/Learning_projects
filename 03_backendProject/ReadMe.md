# Backend Project 



1: nodemon (npm i -D nodemon)  -D:"Developer Depedendency"\
2: "dev":"nodemon src/index.js"    in package.json\
3: required folders:
   > Controllers:- functionality
   > db:- database connection
   > middleware:-code run inbetween request and server
   > models
   > routes
   > utils 

4: npm Prettier(not vs-code extenstion):     (npm i -D prettier)
   Now in root make a file .prettierrc to settingup the prettier

5: (dotenv, mongoose, express) required    

6: "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"     to use env as experimental feature
7: cookie parser (npm i cookie-parser)
8: cors (npm i cors)
9: Mongoose aggregate paginate(pipeline)  (npm i mongoose-aggregate-paginate-v2)
10: Bcrypt (npm i bcrypt)         A library to help you hash passwords.
11: JWT(jsonwebtoken)   (npm i jsonwebtoken)
12: multer (npm i multer)
13: cloudinary (npm i cloudinary)


Notes:- > "touch" create file
        > "mkdir" create folder



# second (naive) method to connect db within index file

//Approach 1 to connect database in index file\

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error in connecting db", error);
    throw error;
  }
})();


# Notes:

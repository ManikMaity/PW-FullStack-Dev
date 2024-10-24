# MVC Arcitecture
- Hepls to structured the backend application well
- MVC Architecture is a pattern to write server-side applications that divides the application into three parts: Model, View, and Controller

- View is the layer that users interact with the application, and Controller is the layer that receives user req and send it to Model. and receive the response from Model and return it to the View.

```
View (req) --> Controller --> Model
Model (res) --> Controller --> View
```

## MVC Architecture
### Frontend Project
- View (React / Frontend Project)

### Backend Project
- Controller
- Model

## More broader approaches

```
View --> Routing Layer --> Validation Layer --> Controller Layer (Receives user req and send it to Service) --> Service Layer (Contain functions and classes to handle business logic) --> Repository Layer --> Schema Layer
```
### Other Layer
```
API Layer, Configuration Layer, util/helper Layer, DTO Layer
```

### Repository design pattern
- Segregate DB intractions from business logic to a new Layer.
- This Layer is called Repository  Layer / DAO Layer (Data Access Layer).
- Inside the Repository Layer, we can use any ORM or RAW queries.

### Schema Layer
- In the schema layer, we define the schema of the database.

### Validation on code level
- In mongose we can define the validation on code with the Schema.
```js
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        

    },
    password : {
        type : String,
        required : true
    }
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
```

- We can include our custom validation using regex.
```js
email : {
        type : String,
        required : true,
        unique : true,
        validate : {
            validator : (value) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message : (props) => `${props.value} is not a valid email`
        }

    },
```
- In mongoose Schma we can pass {timestaps : true} with the Schema Obj which will provide create and update date automacic


## Task
- Make a Post Schema 
```js
import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    postContent : {
        type : String,
        reqiured : true,  
    },
    user : {
        type : Schema.ObjectId,
        reqiured : true
    },
    image : {
        type : String,
        reqiured : true,
        validate : {
            validator : (value) => {
                return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/i.test(value)
            },
            message : "Invalid Image url"
        }
    }

}, {timestamps : true})
```
## FIX
- We make also directly take image and convert it to `base64` string and store the image in the db.
- But this will take lots storage and database become messy because the image strig is long.
- Thats why we can use `amazon s3` bucket to store the image.
- s3 will take image and return the url of the image.

```js
    user : {
        type : Schema.ObjectId,
        ref : "User",
        reqiured : true
    },
```
- In mongoose when we have to do relationship we need to use `ref` in the schema.


## HOMEWORK - 
- Upload the image in cloudinary and store thr url in the database.
- Done
```js
import { v2 as cloudinary } from "cloudinary";
import { CLOUDINARY_KEY, CLOUDINARY_SECRECT } from "./serverConfig.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

cloudinary.config({
  cloud_name: "dp4roeps2",
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRECT,
});

export async function uploadImageInCloudinary(imagename) {
  try {
    const relativePath = path.join(__dirname, `../../public/${imagename}`);
    const result = await cloudinary.uploader.upload(relativePath);
    console.log("Image uploaded successfully");
    console.log(result);
    console.log(result.url);
    return result?.url;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
```

## Routes
- We can use `express` router to handle the routes.
- When we use something like `https://example.com/api/user` that mean its a api route
- There is other type of route like `http://example.com/user` that mean its a web route

### API Versioning
- Using this we can make multiple version of the api.
- Like `https://example.com/api/v1/user` and `https://example.com/api/v2/user`
- We can define single route inside our index.js like `/api` and in the api route we can define the other routes like `/user, /post, `etc. We can use `apiRouter.use()` to do that.
```js
import express from "express";
import userRouter from "./user.js";
import postRouter from "./post.js";
const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/post", postRouter);


export default apiRouter;
```
### TASK make a V1 router and make a V2 router 

```js
import express from "express";
import userRouter from "../user.js";
import postRouter from "../post.js";
const v1Router = express.Router();

v1Router.use("/user", userRouter);
v1Router.use("/post", postRouter);


export default v1Router;
```

```js
import express from "express";
import userRouter from "./user.js";
import postRouter from "./post.js";
import v1Router from "./v1/v1Router.js";
const apiRouter = express.Router();

apiRouter.use("/v1", v1Router);

export default apiRouter;
```

- Done, now we can use `http://localhost:3000/api/v1/post/all` to access the all post.
- FIXDone: All the other routes like `user` and `post` should be inside the v1 folder.

## TASK - 
- Done - Implement the `delete` and `update` route

## HW -
- Implement a logic to delete the exiting image from cloudinary when image is updated or post deleted.

## Triggers 
- Every database have triggers.
- Triggers are used to do just before and after some action happens in the database.
- In mongoose triggers are called hook and there is `pre` and `post` hooks.
- `pre` hooks are called before the action and `post` hooks are called after the action.
- These are used in the `Schema` or `Model` Layer.
```js
userSchema.pre("save", function modifyPassword(next){
    const user = this;
    const hashedPassword = bcrypt.hashSync(user.password, SALT_ROUND);
    user.password = hashedPassword;
    next();
})
```
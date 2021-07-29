const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const router = require("./server/routes/routers");
const connectDB = require("./server/database/connection")
const app = express();

dotenv.config();
const port = process.env.PORT ||3000;

// parser
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

//morgan
app.use(morgan('tiny'));

//connection of mongoDB
connectDB();


//loading assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
app.use('/images',express.static(path.resolve(__dirname,"assets/images")));


// templating engine
app.set("view engine","ejs");

app.use("/",router);
//listening port
app.listen(port,()=>console.log(`server running on th port http://localhost:${port}`))
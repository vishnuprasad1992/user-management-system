const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb+srv://vishnu:vishnu123@cluster0.47s3z.mongodb.net/userDatabase?retryWrites=true&w=majority",{
            useNewUrlParser : true,
            useUnifiedTopology: true,
            useFindAndModify:false,
            useCreateIndex:true
        });
        console.log(`MongoDB Connected : ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;


require("dotenv").config()
const connectDB=require("./db/connect")
const Product=require("./models/pro")

const UserapiJson=require("./userapi.json");

const start=async()=>{
    try {
        await connectDB(process.env.MONGODB_URL)
        await Product.deleteMany();
        await Product.create(UserapiJson)
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start()



import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()

const db = process.env.MONGO_URI

const connectDB = async () => {
    try {
       const conn = await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.error(`Error: ${err.message}`.red.underline.bold)
        process.exit(1)
    }
}
export default connectDB
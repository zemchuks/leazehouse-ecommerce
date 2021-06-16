import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // Empty the database before importing data
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // insert into User
        const createdUsers = await User.insertMany(users)
        console.log(createdUsers);
        // The admin should be the 
        const adminUser = createdUsers[0]._id

        // map through the products and add the admin user to each one
        const sampleProducts = products.map(product => {
            // return all the product data and add the admin user to the user field
            return { ...product, user: adminUser}
        })

        // seed the database
        await Product.insertMany(sampleProducts)

        console.log('Data imported'.green.inverse);
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        // Empty the database before importing data
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed'.red.inverse);
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
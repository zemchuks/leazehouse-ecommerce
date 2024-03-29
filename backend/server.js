import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/middleware.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('API is running...')
})

// ROutes to hit 
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// error handling
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Live @ port ${PORT}...`.yellow.bold)
})
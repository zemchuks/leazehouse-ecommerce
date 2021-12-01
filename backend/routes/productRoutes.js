import express from 'express'

const router = express.Router()
import { getProducts, getProductById} from '../controllers/productController.js'

// @desc        Fetch all Products
router.route('/').get(getProducts)

// @desc        Fetch a single Products
router.route('/:id').get(getProductById)

export default router
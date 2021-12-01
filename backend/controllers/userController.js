import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc        Auth user & get Token
// @route       POST /api/users/login
// @access      Public
const authUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body

 const user = await User.findOne({ email })
 if (user && (user.matchPasseord(password))) {
    res.json({
        _id: usjuuunner._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user_id)
    })
 } else {
     res.status(401)
     throw new Error('invalid email or password')
 }
})

export { authUser}
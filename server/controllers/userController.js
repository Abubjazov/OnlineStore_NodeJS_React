import bcrypt from 'bcrypt'
import Jwt  from 'jsonwebtoken'

import { ApiError } from '../error/ApiError.js'
import { Basket, User } from '../models/models.js'

const generateJwt = (id, email, role) => {
    return Jwt.sign(
        { id: id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '8h'}
    )
}

export class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body
        if (!email && !password) {
            return next(ApiError.badRequest('Incorrect email or password'))
        }

        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest(`User with email: ${ email } already exists`))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, role, password: hashPassword })
        const basket = await Basket.create({ userId: user.id })
        const token = generateJwt(user.id, user.email, user.role)

        return res.json({ token })
    }

    async login(req, res) {

    }

    async checkAuth(req, res, next) {
        const {id} = req.query

        if (!id) return next(ApiError.badRequest('No user ID'))

        res.json({
            message: `It's OK! From checkAuth`,
            id
        })
    }
}

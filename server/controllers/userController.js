import bcrypt from 'bcrypt'
import Jwt  from 'jsonwebtoken'

import { ApiError } from '../error/ApiError.js'
import { Basket, User } from '../models/models.js'

const generateJwt = (id, email, role) => {
    return Jwt.sign(
        { id, email, role}, 
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
        await Basket.create({ userId: user.id })
        const token = generateJwt(user.id, user.email, user.role)

        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })

        if (!user) {
            return next(ApiError.internalError('User is not found'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword) {
            return next(ApiError.internalError('Invalid password entered'))
        }

        const token = generateJwt(user.id, user.email, user.role)

        return res.json({ token })
    }

    async checkAuth(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)

        return res.json({ token })
    }
}

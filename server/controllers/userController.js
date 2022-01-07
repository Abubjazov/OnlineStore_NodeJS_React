import { ApiError } from '../error/ApiError.js'

export class UserController {
    async registration(req, res) {

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

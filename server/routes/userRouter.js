import { Router } from 'express'
import { UserController } from '../controllers/userController.js'
import { authHandler } from '../middleware/AuthHandler.js'

const userController = new UserController()

export const userRouter = new Router()

userRouter.get('/auth', authHandler, userController.checkAuth)
userRouter.post('/registration', userController.registration)
userRouter.post('/login', userController.login)

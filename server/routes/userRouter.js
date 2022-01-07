import { Router } from 'express'
import { UserController } from '../controllers/userController'

const userController = new UserController()

export const userRouter = new Router()

userRouter.get('/auth', userController.checkAuth)
userRouter.post('/registration', userController.registration)
userRouter.post('/login', userController.login)

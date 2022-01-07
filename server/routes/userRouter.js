import { Router } from 'express'

export const userRouter = new Router()

userRouter.get('/auth', (req, res) => {
    res.json({ message: 'It is OK! From /user/auth' })
})

userRouter.post('/registration', )
userRouter.post('/login', )

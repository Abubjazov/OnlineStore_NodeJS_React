import { Router } from 'express'
import { brandRouter } from './brandRouter'
import { deviceRouter } from './deviceRouter'
import { typeRouter } from './typeRouter'
import { userRouter } from './userRouter'

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

export const router = new Router()

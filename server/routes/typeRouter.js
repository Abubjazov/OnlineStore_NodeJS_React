import { Router } from 'express'
import { TypeController } from '../controllers/typeController'

const typeController = new TypeController()

export const typeRouter = new Router()

typeRouter.get('/', typeController.getAll)
typeRouter.post('/', typeController.create)

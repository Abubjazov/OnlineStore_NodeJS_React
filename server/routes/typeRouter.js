import { Router } from 'express'
import { TypeController } from '../controllers/typeController.js'
import { checkRoleHandler } from '../middleware/CheckRoleHandler.js'

const typeController = new TypeController()

export const typeRouter = new Router()

typeRouter.get('/', typeController.getAll)
typeRouter.post('/', checkRoleHandler('ADMIN'), typeController.create)

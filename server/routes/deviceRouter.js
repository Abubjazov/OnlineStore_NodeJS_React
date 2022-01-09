import { Router } from 'express'
import { DeviceController } from '../controllers/deviceController.js'
import { checkRoleHandler } from '../middleware/CheckRoleHandler.js'

const deviceController = new DeviceController()

export const deviceRouter = new Router()

deviceRouter.get('/', deviceController.getAll)
deviceRouter.get('/:id', deviceController.getById)
deviceRouter.post('/', checkRoleHandler('ADMIN'), deviceController.create)

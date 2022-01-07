import { Router } from 'express'
import { DeviceController } from '../controllers/deviceController'

const deviceController = new DeviceController()

export const deviceRouter = new Router()

deviceRouter.get('/', deviceController.getAll)
deviceRouter.get('/:id', deviceController.getById)
deviceRouter.post('/', deviceController.create)

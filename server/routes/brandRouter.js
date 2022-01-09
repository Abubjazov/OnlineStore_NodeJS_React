import { Router } from 'express'
import { BrandController } from '../controllers/brandController.js'
import { checkRoleHandler } from '../middleware/CheckRoleHandler.js'

const brandController = new BrandController()

export const brandRouter = new Router()

brandRouter.get('/', brandController.getAll)
brandRouter.post('/', checkRoleHandler('ADMIN'), brandController.create)

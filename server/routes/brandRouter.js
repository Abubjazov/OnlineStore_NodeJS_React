import { Router } from 'express'
import { BrandController } from '../controllers/brandController'

const brandController = new BrandController()

export const brandRouter = new Router()

brandRouter.get('/', brandController.getAll)
brandRouter.post('/', brandController.create)

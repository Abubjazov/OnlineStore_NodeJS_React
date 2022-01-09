import * as path from 'path'
import { nanoid } from 'nanoid'

import { Device } from '../models/models.js'
import { ApiError } from '../error/ApiError.js'

export class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = nanoid() + ".jpg"

            img.mv(path.resolve('static', fileName))

            const device = await Device.create({ name, price, brandId, typeId, info, img: fileName })

            return res.json(device)            
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        const { brandId, typeId } = req.query
        let devices

        if (!brandId && !typeId) devices = await Device.findAll()
        if (brandId && !typeId) devices = await Device.findAll({ where: {brandId} })
        if (!brandId && typeId) devices = await Device.findAll({ where: {typeId} })
        if (brandId && typeId) devices = await Device.findAll({ where: {brandId, typeId} })
        
        return res.json(devices)
    }

    async getById(req, res) {

    }
}

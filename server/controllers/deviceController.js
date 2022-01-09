import * as path from 'path'
import { nanoid } from 'nanoid'

import { Device, DeviceInfo } from '../models/models.js'
import { ApiError } from '../error/ApiError.js'

export class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = nanoid() + ".jpg"

            img.mv(path.resolve('static', fileName))

            const device = await Device.create({ name, price, brandId, typeId, info, img: fileName })

            if (info) {
                info = JSON.parse(info)
                info.forEach(element => {
                    DeviceInfo.create({
                        title: element.title,
                        description: element.description,
                        deviceId: device.id
                    })
                })
            }

            return res.json(device)            
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query
        limit = limit || 10
        page = page || 1
        let offset = page * limit - limit
        let devices

        if (!brandId && !typeId) devices = await Device.findAndCountAll({ limit, offset })
        if (brandId && !typeId) devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
        if (!brandId && typeId) devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
        if (brandId && typeId) devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset })
        
        return res.json(devices)
    }

    async getById(req, res) {

    }
}

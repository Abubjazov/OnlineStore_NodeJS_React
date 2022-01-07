import 'dotenv/config'
import express from 'express'
import { sequelize } from './utils/database.js'
import cors from 'cors' 

import {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  TypeBrand,
  DeviceInfo
} from './models/models.js'

const app = express()

app.use(cors())
app.use(express.json())

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    
    app.listen(process.env.PORT, () =>
      console.log(`Server listen PORT: ${process.env.PORT}`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()

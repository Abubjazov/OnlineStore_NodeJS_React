import 'dotenv/config'
import express from 'express'
import { sequelize } from './utils/database.js'
import cors from 'cors' 
import fileUpload from 'express-fileupload'

import { router } from './routes/index.js'
import { errorHandler } from './middleware/ErrorHandler.js'
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
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler) //Always the last Middleware!

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync() //{force: true}
    
    app.listen(process.env.PORT, () =>
      console.log(`Server listen PORT: ${process.env.PORT}`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()

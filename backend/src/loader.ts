import { json, urlencoded, type Application } from 'express'
import cors from 'cors'
import logger from 'morgan'
import router from './api'

export default (app: Application) => {
  app.use(logger('dev'))
  app.use(json())
  app.use(urlencoded({ extended: false }))
  app.use(cors({ credentials: true, origin: process.env.ORIGIN_URL }))
  app.use('/api', router)
}

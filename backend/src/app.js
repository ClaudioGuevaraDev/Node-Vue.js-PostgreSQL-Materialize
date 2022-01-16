import 'express-async-errors'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'

import config from './config'

import {  
    createRoles,
    createPainterUsers
} from './libs/initialSetup'
import {
    createPublicDirectory,
    createImagesDirectory
} from './libs/createImagesDirectory'

import * as middlewares from './middlewares'
import * as routes from './routes'

const app = express()

createPublicDirectory()
createImagesDirectory()

createRoles()
createPainterUsers()

app.set('port', config.APP_PORT)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/roles', routes.rolesRoutes)
app.use('/api/users', routes.usersRoutes)
app.use('/api/auth', routes.authRoutes)
app.use('/api/pictures', routes.pictureRoutes)

app.use(middlewares.errorHandler)
app.use(middlewares.unknownEndpoint)

export default app
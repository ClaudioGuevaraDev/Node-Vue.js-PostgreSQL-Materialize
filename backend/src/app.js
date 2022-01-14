import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

import config from './config'

import {  
    createRoles
} from './libs/initialSetup'

import * as middlewares from './middlewares'
import * as routes from './routes'

const app = express()

createRoles()

app.set('port', config.APP_PORT)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())

app.use('/api/roles', routes.rolesRoutes)
app.use('/api/users', routes.usersRoutes)
app.use('/api/auth', routes.authRoutes)

app.use(middlewares.errorHandler)
app.use(middlewares.unknownEndpoint)

export default app
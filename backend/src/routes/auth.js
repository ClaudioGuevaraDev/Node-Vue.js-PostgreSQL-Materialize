import { Router } from 'express'

import * as authCtrl from '../controllers/auth'
import * as middlewares from '../middlewares'

const router = Router()

router.post('/sign-up', [
    middlewares.verifyUsername,
    middlewares.verifyEmail
], authCtrl.signUp)
router.get('/confirm-account/:id/:token', authCtrl.confirmAccount)
router.post('/sign-in', authCtrl.signIn)

export default router
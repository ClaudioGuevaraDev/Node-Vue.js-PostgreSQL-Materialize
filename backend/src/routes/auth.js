import { Router } from 'express'

import * as authCtrl from '../controllers/auth'

const router = Router()

router.post('/sign-up', authCtrl.signUp)
router.post('/sign-in', authCtrl.signIn)

export default router
import { Router } from 'express'

import * as rolesCtrl from '../controllers/roles'

const router = Router()

router.post('/', rolesCtrl.createRole)
router.get('/', rolesCtrl.getAllRoles)

export default router
import { Router } from 'express'

import * as picturesCtrl from '../controllers/pictures'
import * as middlewares from '../middlewares'

const router = Router()

router.post('/', picturesCtrl.createPicture)
router.post('/upload-image/:id', [
    middlewares.fileUpload
], picturesCtrl.uploadImage)

export default router
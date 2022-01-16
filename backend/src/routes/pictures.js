import { Router } from 'express'

import * as picturesCtrl from '../controllers/pictures'
import * as middlewares from '../middlewares'

const router = Router()

router.post('/', [
    middlewares.verifyToken,
    middlewares.isPainter
], picturesCtrl.createPicture)
router.post('/upload-image/:id', [
    middlewares.fileUpload,
    middlewares.verifyToken,
    middlewares.isPainter
], picturesCtrl.uploadImage)

router.get('/', picturesCtrl.getAllPictures)
router.get('/:id', [
    middlewares.verifyToken,
    middlewares.isPainter
], picturesCtrl.getOnePictures)
router.get('/filtered/:id', [
    middlewares.verifyToken,
    middlewares.isPainter
], picturesCtrl.getFilteredPictures)

router.delete('/:id', [
    middlewares.verifyToken,
    middlewares.isPainter
], picturesCtrl.deletePicture)

router.put('/:id', [
    middlewares.verifyToken,
    middlewares.isPainter
], picturesCtrl.updatePicture)
router.put('/update-image/:id', [
    middlewares.fileUpload,
    middlewares.verifyToken,
    middlewares.isPainter
], picturesCtrl.updatePictureImage)

export default router
import { Router } from 'express'

import * as reviewsCtrl from '../controllers/reviews'
import * as middlewares from '../middlewares'

const router = Router()

router.post('/', [
    middlewares.verifyToken,
    middlewares.isUser
], reviewsCtrl.createReview)

router.get('/all/:id', [
    middlewares.verifyToken,
    middlewares.isUser
], reviewsCtrl.getAllReviews)
router.get('/:id', [
    middlewares.verifyToken,
    middlewares.isUser
], reviewsCtrl.getOneReview)

router.delete('/:id', [
    middlewares.verifyToken,
    middlewares.isUser
], reviewsCtrl.deleteReview)

router.put('/:id', [
    middlewares.verifyToken,
    middlewares.isUser
], reviewsCtrl.updateReview)

export default router
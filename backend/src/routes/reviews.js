import { Router } from 'express'

import * as reviewsCtrl from '../controllers/reviews'

const router = Router()

router.post('/', reviewsCtrl.createReview)

router.get('/all/:id', reviewsCtrl.getAllReviews)

router.delete('/:id', reviewsCtrl.deleteReview)

export default router
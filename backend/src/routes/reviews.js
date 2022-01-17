import { Router } from 'express'

import * as reviewsCtrl from '../controllers/reviews'

const router = Router()

router.post('/', reviewsCtrl.createReview)

router.get('/all/:id', reviewsCtrl.getAllReviews)
router.get('/:id', reviewsCtrl.getOneReview)

router.delete('/:id', reviewsCtrl.deleteReview)

router.put('/:id', reviewsCtrl.updateReview)

export default router
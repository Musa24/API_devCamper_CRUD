const express = require('express');
const {
  getAllBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');
const router = express.Router();

router.route('/').get(getAllBootcamps).post(createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .patch(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;

const router = require('express').Router();
const CommentController = require('../controllers/CommentController');

router.get('/', CommentController.findAll)
router.post('/', CommentController.create)

module.exports = router;
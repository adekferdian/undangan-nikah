const router = require('express').Router();
const commentRoute = require('./commentRoute');
router.get('/', (err, res) => {
    res.send(({ message: "connected"}));
});

router.use('/comment', commentRoute)


module.exports = router;
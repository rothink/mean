const {Router} = require('express');
const router = Router();

router.post('/', require('./post-create-post'));
router.get('/', require('./post-read-get'));
router.get('/:slug', require('./post-show-get'));

module.exports = router;

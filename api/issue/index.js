var express = require('express');
var controller = require('./issue.controller');
var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
/*router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/:term/search', controller.search); */

module.exports = router;
const router = require('express').Router();
const checkParam = require('../middlewares/checkParam.middleware');
const getParamsController = require('../controllers/getParams.controller');

router.get('/:param', checkParam, getParamsController.get);

module.exports = router;

const router = require('express').Router();
const getParamsRouter = require('../routers/getParams.router');

router.use('/', getParamsRouter)

module.exports = router;

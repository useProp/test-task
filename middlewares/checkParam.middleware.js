const ApiError = require('../errors/apiError');

module.exports = (req, res, next) => {
  const { param } = req.params;

  if (Number.isNaN(+param) || typeof +param !== 'number') {
    return next(ApiError.badRequest(`Params must be only a number type`))
  }

  next();
}

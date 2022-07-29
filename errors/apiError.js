const HTTP_ERRORS = require("./errors");

class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static notFound(message) {
    return new ApiError(HTTP_ERRORS.NOT_FOUND, message);
  }

  static badRequest(message) {
    return new ApiError(HTTP_ERRORS.BAD_REQUEST, message);
  }

  static internal(message) {
    return new ApiError(HTTP_ERRORS.INTERNAL, message);
  }
}

module.exports = ApiError;

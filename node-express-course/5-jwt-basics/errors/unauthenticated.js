const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes"); // named import

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;

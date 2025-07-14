const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class NotImplemented extends BaseError {
    constructor(methodName) {
        super("InternalServerError" , StatusCodes.NOT_IMPLEMENTED , `${methodName} Not Implemented` , {});
    }
}

module.exports = NotImplemented;
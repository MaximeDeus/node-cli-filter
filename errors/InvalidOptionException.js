class InvalidOptionException extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidOptionException';
    }
}

module.exports = InvalidOptionException;

class UnknownOptionException extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnknownOptionException';
  }
}

module.exports = UnknownOptionException;

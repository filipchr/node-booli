const crypto = require('crypto')

class Authenticator {
  constructor() {
    if (!process.env.CALLER_ID) {
      throw new Error('No callerId provided');
      process.exit(1);
    }

    if (!process.env.PRIVATE_KEY) {
      throw new Error('No privateKey provided');
      process.exit(1);
    }

    this.callerId = process.env.CALLER_ID;
    this.privateKey =  process.env.PRIVATE_KEY;
    this.shasum = crypto.createHash('sha1')
  }

  generateAuth() {
    const time = Math.round(Date.now());
    const unique = crypto.randomBytes(Math.ceil(16/2)).toString("hex").slice(0, 16);

    return {
      callerId: this.callerId,
      time: time,
      unique: unique,
      hash: this.shasum.update(this.callerId + time + this.privateKey + unique).digest("hex"),
    };
  }
}

module.exports = Authenticator;
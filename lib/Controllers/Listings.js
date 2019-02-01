const ApiClient = require('../ApiClient');
const querystring = require('querystring');

class Listings extends ApiClient {
  constructor() {
    super();
    this._response = {};
  }

  get response () {
    return this._response;
  }

  async all(options) {
    this._response = await this.fetch(
      `${this.baseURL}/listings?${querystring.stringify(options)}`
    );
    return this._response;
  }

  single(id) {
    this._response = this.fetch(
      `${this.baseURL}/listings/${id}`
    );
    return this._response;
  }
}

module.exports = new Listings;
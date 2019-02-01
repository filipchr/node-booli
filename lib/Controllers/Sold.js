const ApiClient = require('../ApiClient');
const querystring = require('querystring');

class Sold extends ApiClient {
  constructor() {
    super();
    this._response = {};
  }

  fetchAll(options) {
    const query = querystring.stringify(options);
    const url = `${this.baseURL}/sold?${query}`;
    return this.fetch(url);
  }

  get response() {
    return this._response;
  }

  async all(options) {
    this._response = await this.fetchAll(options);
    return this._response;
  }

  get ids() {
    return this._response.sold.map(area => {
      return area.booliId
    });
  }
}

module.exports = new Sold
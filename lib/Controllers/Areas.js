const ApiClient = require('../ApiClient');
const querystring = require('querystring');

class Areas extends ApiClient {
  constructor() {
    super();
    this._response = {};
  }

  fetchArea(areas) {
    const url = `${this.baseURL}/areas?q=${encodeURI(areas)}`;
    return this.fetch(url);
  }

  get response() {
    return this._response
  }

  async getAreas(areas) {
    this._response = await this.fetchArea(areas.join(','));
    return this._response;
  }

  get ids() {
    return this.response.areas.map(area => {
      return area.booliId
    });
  }

  get firstId() {
    return this.ids[0];
  }
}

module.exports = new Areas
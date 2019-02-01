//const fetch = require('cross-fetch');
const Authenticator = require('./Auth');
const fetch = require('node-fetch');
const querystring = require('querystring');

class ApiClient {
  constructor(options) {
    options = options || {}

    const defaultOptions = {
      baseURL: 'http://api.booli.se',
    };

    options = Object.assign(defaultOptions, options);

    this.auth = new Authenticator;

    this.baseURL = options.baseURL;
  }

  get headers() {
    return {
      'Accept': 'application/vnd.booli-v2+json',
    };
  }

  get hash() {
    return querystring.stringify(this.auth.generateAuth());
  }

  async fetch(url) {
    try {
      const body = await fetch(`${url}&${this.hash}`, this.header)
      return await body.json();
    } catch (error) {
      console.error(error)
      return Promise.reject();
    }
  }
}

module.exports = ApiClient;
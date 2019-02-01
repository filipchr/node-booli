const Controllers = require('./Controllers');

/**
 * Expose the controllers
 */
class Booli {
  constructor() {
    this.response = {};

    this.areas = Controllers.Areas;
    this.listings = Controllers.Listings;
    this.sold = Controllers.Sold;
  }
}

module.exports = new Booli();
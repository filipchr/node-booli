# Booli API Node wrapper

> Booli API Node wrapper provides access to the Booli Api.

:link: For a detailed API description, please see [the full api reference](https://www.booli.se/p/api/)

## Getting started

```javascript
npm install --save node-booli
```

Initialize

```javascript
const Booli = require('node-booli');
```

All methods uses `fetch` under the hood

**Listings**

```javascript
const query = {
  q: 'Stockholm',
  minRooms: 2,
  maxRooms: 3,
};
const listingsResponse = await Booli.listings.all(query); // Fetch all listings.

const singleResponse = await Booli.listings.single(1); // Fetch one item with the id of 1
```

**Sold**

```javascript
const query = {
  q: 'Stockholm',
  minRooms: 2,
  maxRooms: 3,
  maxPrice: 3500000,
};
const soldResponse = await Booli.sold.all(query); // Fetch all sold given the parameter
```

**Areas**

```javascript
const areasResponse = await Booli.areas.getAreas([
  'Midsommarkransen',
  'Stockholm',
]); // fetch areas
```

## Development

```
git clone https://github.com/filipchr/node-booli
cd node-booli
```

Install dependencies

```
npm install
```

Run example

```
node example.js
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/filipchr/node-booli

## License

All data provided belongs to Booli Search Technologies AB.

This packages is powered by [Booli](http://www.booli.se)

![Booli logo](https://bcdn.se/images/resources/booli_logo.png)

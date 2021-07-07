const Booli = require('./index');
const TYPES = require('./lib/types');

const main = async () => {
  // Get area code for Midsommarkransen and Stockholm
  const areas = await Booli.areas.getAreas(['Midsommarkransen', 'Stockholm']);
  // Get the first area id
  const areaId = areas.areas[0].booliId;

  // Get listings for the area code
  const listings = await Booli.listings.all({
    areaId,
    objectType: TYPES.all,
  });

  // Print the response to the console
  console.log(JSON.stringify(listings));
}

main();

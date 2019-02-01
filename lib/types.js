const types = {
  apartment: 'lägenhet',
  house: 'villa',
  farm: 'gård',
  plot: 'tomt-mark',
  vacation: 'fritidshus',
  semiDetached: 'parhus',
  terraced: 'radhus',
  detached: 'kedjehus',
}

types.all = Object.keys(types).map(type => types[type]).join(',');
module.exports = types;

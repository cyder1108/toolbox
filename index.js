function only(...arrowKeys){ return ( obj ) => {
  let result = {};
  Object.entries( obj ).forEach( ([key,val]) => {
    if( arrowKeys.includes( key ) ) {
      result[key] = val
    }
  });
  return result;
}}

function createRandomHash( length = 30 ) {
  const assets = "abcdefghyjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var hash = "";
  for( var i =0; i< length ; i++) {
    hash += assets[Math.floor( Math.random() * assets.length )];
  }
  return hash;
}

module.exports = { only, createRandomHash }

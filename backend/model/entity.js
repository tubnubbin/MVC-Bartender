const { resolve } = require('path');

var fs = require('fs');

exports.getMenu = function(path) {
  var menuFile;
  return new Promise( resolve => {
      menuFile = JSON.parse(fs.readFileSync(path));
      resolve(menuFile);
    });
}

exports.getOrders = function(path) {
  var orderFile;
  return new Promise( resolve => {
    orderFile = JSON.parse(fs.readFileSync(path));
      resolve(orderFile);
    });
}

exports.placeOrder = function(path, orderObject) {
  var orderFile = [];
  orderFile = JSON.parse(fs.readFileSync(path));
  orderFile.push(orderObject);
  fs.writeFile(path, JSON.stringify(orderFile), function(err, result){
    if(err) console.log('error', err);
  });
}

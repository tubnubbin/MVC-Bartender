const model = require('../model/entity');

exports.getMenu = async function(req, res, next) {
  let serverMenu = [];
  serverMenu = await model.getMenu(process.cwd() + '/menu.json');
  if(serverMenu.length > 0) {
    res.status(200).json({status:200, results: serverMenu, resultsLength: serverMenu.length});
  }
  else {
    res.status(204).send();
  }
}

exports.getOrders = async function(req, res, next) {
  let orderQueue = [];
  orderQueue = await model.getOrders(process.cwd() + '/orders.json');
  if(orderQueue.length > 0) {
    res.status(200).json({status:200, results: orderQueue, resultsLength: orderQueue.length});
  }
  else {
    res.status(204).send();
  }
}

exports.placeOrder = async function(req, res, next) {
  let newEntry = model.placeOrder(process.cwd() + '/orders.json', req.body);
  if(newEntry == 1) {
    res.status(201).json({orderPlaced: true});
  }
  else {
    res.status(202).send();
  }
}

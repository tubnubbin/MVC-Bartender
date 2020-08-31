const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

const controller = require('../controllers/main');

app.use(bodyParser.json());

//Add GET endpoints here
router.get('/menu', controller.getMenu);
router.get('/orders', controller.getOrders);

//Add POST endpoint here
router.post('/placeorder', controller.placeOrder);

module.exports = router;

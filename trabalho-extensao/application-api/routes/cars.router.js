var express = require("express");
var router = express.Router();

const CarService = require("../services/car.service");

router.get("/list", (request, response) => {
	response.json(CarService.list());
});

router.get("/retrive/:id", (request, response) => {
	const car = CarService.get_by_id(request.params.id);
	response.json(car);
});

module.exports = router;

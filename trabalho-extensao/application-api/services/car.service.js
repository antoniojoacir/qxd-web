const cars = require("../data/cars");
const CarModel = require("../models/car.model");

class CarService {
	static list() {
		return cars;
	}
	static get_by_id(index) {
		for (let i = 0; i < cars.length; i++) {
			if (cars[i].id == index) {
				return cars[i];
			}
		}
		return null;
	}
}

module.exports = CarService;

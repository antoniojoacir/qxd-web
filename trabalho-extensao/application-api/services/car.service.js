const cars = require("../data/cars");
const CarModel = require("../models/car.model");

let nextId = cars.length - 1;

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

	static create(data) {
		const newCar = new CarModel(
			++nextId,
			data.name,
			data.img,
			data.desc,
			data.price,
		);

		cars.push(newCar);

		return newCar;
	}
}

module.exports = CarService;

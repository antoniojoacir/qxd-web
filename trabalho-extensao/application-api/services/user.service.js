const users = require("../data/users");
const UserModel = require("../models/user.model");

class UserService {
	static login(username, password) {
		for (let index = 0; index < users.length; index++) {
			if (users[index].username == username) {
				if (users[index].password == password) {
					return users[index];
				}
			}
		}
		return null;
	}
}

module.exports = UserService;

var express = require("express");
var router = express.Router();

const UserService = require("../services/user.service");

router.post("/login", (request, response) => {
	const { username, password } = request.body;

	const user = UserService.login(username, password);

	if (user) {
		const userToReturn = {
			id: user.id,
			username: user.username,
			role: user.role,
		};

		response.json(userToReturn);
	} else {
		response.status(401).json({ error: "Usuário ou senha inválidos." });
	}
});

module.exports = router;

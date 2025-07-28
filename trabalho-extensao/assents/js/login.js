document.addEventListener("DOMContentLoaded", () => {
	const loginForm = document.getElementById("login-form");
	const errorMessage = document.getElementById("error-message");

	loginForm.addEventListener("submit", async (event) => {
		event.preventDefault();
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;

		errorMessage.textContent = "";

		try {
			const response = await axios.post(`http://localhost:3000/api/v1/login`, {
				username: username,
				password: password,
			});

			const user = await response.data;

			localStorage.setItem("userRole", user.role);

			window.location.href = "./pages/home.html";
		} catch (error) {
			if (error.response) {
				errorMessage.textContent = error.response.data.error;
			} else {
				errorMessage.textContent =
					"Não foi possível conectar ao servidor. Tente novamente mais tarde.";
			}
			console.error("Falha no login:", error);
		}
	});
});

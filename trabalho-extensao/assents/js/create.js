document.addEventListener("DOMContentLoaded", () => {
	const insertForm = document.getElementById("insert-form");
	const feedbackMessage = document.getElementById("feedback-message");

	insertForm.addEventListener("submit", async (event) => {
		event.preventDefault();

		const newCar = {
			name: document.getElementById("name").value,
			price: document.getElementById("price").value,
			img: document.getElementById("img").value,
			desc: document.getElementById("desc").value,
		};

		try {
			const response = await axios.post(
				`http://localhost:3000/cars/create`,
				newCar,
			);

			if (response.status === 201) {
				feedbackMessage.textContent = `Carro "${response.data.name}" adicionado com sucesso!`;
				feedbackMessage.style.color = "green";
				insertForm.reset();
			}
		} catch (error) {
			feedbackMessage.textContent =
				"Erro ao adicionar o carro. Tente novamente.";
			feedbackMessage.style.color = "red";
			console.error("Falha ao inserir carro:", error);
		}
	});
});

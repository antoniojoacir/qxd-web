const params = new URLSearchParams(document.location.search.substring(1));
const index = params.get("id");

const retriveCar = async () => {
	const detailsContainer = document.getElementById("details-container");

	try {
		const response = await axios.get(
			`http://localhost:3000/cars/retrive/${index}`,
		);
		const car = response.data;

		document.title = car.name;
		detailsContainer.innerHTML = `
            <div class="details-wrapper">
                <div class="details-img">
                    <img src="${car.img}" alt="Imagem de ${car.name}">
                </div>
                <div class="details-info">
                    <h1>${car.name}</h1>
                    <p>${car.desc}</p>
										<p>${car.price}</p>

										<a href="https://www.instagram.com/pinheiro_veiculos_" 
                       class="instagram-button" 
                       target="_blank" 
                       rel="noopener noreferrer">
                       Fale conosco
                    </a>
                </div>
            </div>
        `;
	} catch (error) {
		console.error("Erro ao buscar detalhes do veículo:", error);
		detailsContainer.innerHTML = `<p class="error-message">Não foi possível encontrar o veículo com o ID ${index}. Por favor, tente novamente.</p>`;
	}
};

const getCars = async () => {
	const main_content = document.getElementById("main-content");
	main_content.innerHTML = "<p>Carregando veículos...</p>";
	let content = "";

	try {
		const response = await axios.get(`http://localhost:3000/cars/list`);
		const data = await response.data;
		data.forEach((car) => {
			content += `
                <div class="car-card">
                    <div class="card-top-text"><h2>${car.name}</h2></div>
                    <div class="image-container">
                        <img src="${car.img}" alt="Imagem do ${car.name}">
                    </div>
                    <div class="card-content">
                        <h2>${car.price}</h2>
                        <a href="details.html?id=${car.id}" class="details-button">Ver Detalhes</a>
                    </div>
                </div>            
				`;
		});
		main_content.innerHTML = content;
	} catch (err) {
		console.log("Err: ", err);
	}
};

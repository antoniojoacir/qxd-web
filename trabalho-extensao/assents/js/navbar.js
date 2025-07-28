const toggleTheme = () => {
	const isDarkMode = document.body.classList.toggle("dark");
	localStorage.setItem("theme", isDarkMode ? "dark" : "light");
};

const navbar = () => {
	const nav = document.getElementById("nav-bar");
	const userRole = localStorage.getItem("userRole");

	nav.innerHTML = `
        <a href="./home.html">Home</a>
        <a href="./products.html">Carros</a>
        <a href="./about.html">Sobre</a>
        ${userRole === "admin" ? `<a href="./create.html">Inserir</a>` : ""}
        <a href="#" id="toggle-theme">Tema</a>
        ${userRole ? `<a href="#" id="logout-button">Logout</a>` : `<a href="../index.html">Login</a>`}
    `;

	const toggleButton = document.getElementById("toggle-theme");
	if (toggleButton) {
		toggleButton.addEventListener("click", (event) => {
			event.preventDefault();
			toggleTheme();
		});
	}

	const logoutButton = document.getElementById("logout-button");
	if (logoutButton) {
		logoutButton.addEventListener("click", (event) => {
			event.preventDefault();
			localStorage.removeItem("userRole");
			localStorage.removeItem("authToken");
			window.location.href = "../index.html";
		});
	}
};

document.addEventListener("DOMContentLoaded", navbar);

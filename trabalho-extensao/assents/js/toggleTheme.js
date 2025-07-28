const toggleTheme = async () => {
	document.body.classList.toggle("dark");
};

document.addEventListener("DOMContentLoaded", () => {
	const toggle_button = document.getElementById("toggle-theme");

	toggle_button.addEventListener("click", (event) => {
		event.preventDefault();
		toggleTheme();
	});
});

(() => {
	const userRole = localStorage.getItem("userRole");
	if (!userRole) {
		window.location.href = "./index.html";
	}
})();

(() => {
	const userRole = localStorage.getItem("userRole");
	if (userRole !== "admin") {
		alert("Acesso negado. Esta página é restrita a administradores.");
		window.location.href = "./pages/home.html";
	}
})();

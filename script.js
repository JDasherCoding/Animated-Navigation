const toggleBtn = document.getElementById("toggle");
const navigation = document.getElementById("active");

toggleBtn.addEventListener("click", () =>
	navigation.classList.toggle("active")
);

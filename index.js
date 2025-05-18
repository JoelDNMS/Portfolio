function goTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const btnUp = document.querySelector("#btn-up");

	window.addEventListener("scroll", () => {
		const scrollTop = window.scrollY || window.pageYOffset;
		const viewportHeight = window.innerHeight;
		const totalHeight = document.documentElement.scrollHeight;

		if (scrollTop + viewportHeight >= totalHeight - 1300) {
			btnUp.classList.remove("hide");
		} else {
			btnUp.classList.add("hide");
		}
	});
});

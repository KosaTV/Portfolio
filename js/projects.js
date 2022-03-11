const projects = document.querySelector("#projects");

projects.addEventListener("mouseover", e => {
	const box = e.target.closest(".project-cnt");
	if (box) {
		const visualArea = box.querySelector(".project-visualization");
		visualArea.classList.remove("project-visualization--un-hovered");
	}
});

projects.addEventListener("mousemove", e => {
	const box = e.target.closest(".project-cnt");
	if (box) {
		const visualArea = box.querySelector(".project-visualization");
		const {width, height} = box.getBoundingClientRect();
		visualArea.style.transform = `perspective(1000px) rotateX(${(e.pageY - height / 2) / 25}deg) rotateY(${(e.pageX - width / 2) / 25}deg)`;
	}
});

projects.addEventListener("mouseout", e => {
	const isBox = e.target.matches(".project-cnt");
	if (isBox) {
		const visualArea = e.target.querySelector(".project-visualization");
		visualArea.classList.add("project-visualization--un-hovered");
		visualArea.removeAttribute("style");
	}
});

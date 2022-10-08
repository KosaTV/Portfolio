const projects = document.querySelector("#projects");

projects.addEventListener("mouseover", e => {
	const box = e.target.closest(".project-cnt");
	if (box) {
		const visualArea = box.querySelector(".project-visualization");
		visualArea.classList.remove("project-visualization--un-hovered");
	}

	if (e.target.classList.contains("project-img")) {
		const oldSrc = e.target.src;
		if (oldSrc.includes(".jpg")) {
			const newSrc = oldSrc.replace(".jpg", ".gif").replace("/imgs/", "/imgs/gifs/");
			e.target.src = newSrc;
		}
	}
});

projects.addEventListener("mousemove", e => {
	const box = e.target.closest(".project-cnt");
	if (box) {
		const visualArea = box.querySelector(".project-visualization");
		const {width, height} = box.getBoundingClientRect();
		visualArea.style.transform = `perspective(1000px) rotateX(-${(e.pageY - height / 2) / 50}deg) rotateY(${(e.pageX - width / 2) / 50}deg)`;
	}
});

projects.addEventListener("mouseout", e => {
	const isBox = e.target.matches(".project-cnt");
	if (isBox) {
		const visualArea = e.target.querySelector(".project-visualization");
		visualArea.classList.add("project-visualization--un-hovered");
		visualArea.removeAttribute("style");
	}

	if (e.target.classList.contains("project-img")) {
		const oldSrc = e.target.src;
		if (oldSrc.includes(".gif")) {
			const newSrc = oldSrc.replace(".gif", ".jpg").replace("/imgs/gifs/", "/imgs/");
			e.target.src = newSrc;
		}
	}
});

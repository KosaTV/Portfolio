const scrollingInfo = {
	rotated: false,
	touchStartX: 0,
	touchStartY: 0,
	touchEndX: 0,
	touchEndY: 0
};

const rotateFromHome = (reverse = false) => {
	cubeBox.classList.add("cube-box--scroll-rotate");

	const removeScale = e => {
		if (e.animationName === "goAndCome") {
			cubeBox.classList.remove("cube-box--scroll-rotate");
			cubeBox.removeEventListener("animationend", removeScale);
		} else {
		}
	};

	cubeBox.addEventListener("animationend", removeScale);

	if (!reverse) {
		cube.classList.add("cube--false-rotated");
		cube.classList.remove("cube--after-rotated");
		firstFace.classList.remove("cube__face--1-after-rotate");
		secondFace.classList.remove("cube__face--2-after-rotate");

		setTimeout(() => {
			cube.classList.remove("cube--false-rotated");
		});

		scrollingInfo.rotated = false;
	} else if (reverse) {
		cube.classList.add("cube--rotated");
		scrollingInfo.rotated = true;
		addAnimationToItems(".about-animated", "animated-item--animated");
		document.querySelector(".svg-text__text--about").classList.add("svg-text__text--loaded");

		cube.ontransitionend = e => {
			cube.classList.remove("cube--rotated");
			cube.classList.add("cube--after-rotated");
			firstFace.classList.add("cube__face--1-after-rotate");
			secondFace.classList.add("cube__face--2-after-rotate");

			//removing the event
			cube.ontransitionend = null;
		};
	}
};

goDownBtn.onclick = rotateFromHome;

const handleMobilePageRotate = e => {
	if (!e.target.closest(".cube")) return;
	scrollingInfo.touchEndY = e.changedTouches[0].clientY;
	const distance = Math.abs(scrollingInfo.touchStartY - scrollingInfo.touchEndY) > 40;
	const isDown = scrollingInfo.touchStartY - scrollingInfo.touchEndY > 40;
	if (scrollingInfo.rotated && distance && !isDown && sectionsBox.scrollTop === 0) {
		rotateFromHome();
	} else if (!scrollingInfo.rotated && distance && isDown && sectionsBox.scrollTop === 0) {
		rotateFromHome(true);
	}
};

const handleDesktopPageRotate = e => {
	if (!e.target.closest(".cube")) return;
	if (!(e.ctrlKey || e.altKey || e.shiftKey)) {
		if (scrollingInfo.rotated && e.deltaY < 0 && sectionsBox.scrollTop === 0) {
			rotateFromHome();
		} else if (!scrollingInfo.rotated && e.deltaY > 0 && sectionsBox.scrollTop === 0) {
			rotateFromHome(true);
		}
	}
};

const header = document.querySelector(".header");
const menu = header.querySelector(".menu");
const goDownBtn = document.querySelector(".go-down");
const contactOption = menu.querySelector(".menu__item--contact");
const contactForm = document.querySelector(".form-cnt");
const contactFormCloseBtn = contactForm.querySelector(".form-cnt__close");
const sectionsBox = document.querySelector(".detail-sections");
const cube = document.querySelector(".cube");
const cubeBox = document.querySelector(".cube-box");
const aboutModel3d = document.querySelector(".about-3d");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const secondFace = cubeBox.querySelector(".cube__face--2");

const scrollingInfo = {
	rotated: false,
	touchStartX: 0,
	touchStartY: 0,
	touchEndX: 0,
	touchEndY: 0
};

const setRotateDistance = () => {
	cube.style.transform = "translateZ(0) translateY(0) rotateX(0)";
	secondFace.style.transform = `translateZ(-${window.innerHeight / 2}px) translateY(${window.innerHeight / 2}px) rotateX(-90deg)`;
};

setRotateDistance();

window.addEventListener("resize", e => {
	if (scrollingInfo.rotated) {
		cube.style.transform = `translateZ(-${window.innerHeight / 2}px) translateY(-${window.innerHeight / 2}px) rotateX(90deg)`;
	} else cube.style.transform = "translateZ(0) translateY(0) rotateX(0)";
	secondFace.style.transform = `translateZ(-${window.innerHeight / 2}px) translateY(${window.innerHeight / 2}px) rotateX(-90deg)`;
});

contactOption.addEventListener("click", e => {
	contactForm.classList.add("form-cnt--opened");
	header.style.transform = `translateY(-100%)`;
});
contactFormCloseBtn.addEventListener("click", e => {
	contactForm.classList.remove("form-cnt--opened");
	header.removeAttribute("style");
});

hamburgerMenu.addEventListener("click", e => {
	header.classList.toggle("header--opened");
});

const rotateFromHome = (reverse = false) => {
	cubeBox.classList.add("cube-box--scroll-rotate");

	if (!reverse) {
		scrollingInfo.rotated = false;
		secondFace.style.zIndex = 0;
		sectionsBox.style.overflow = "hidden";
		cube.style.transform = "translateZ(0) translateY(0) rotateX(0)";
	} else if (reverse) {
		scrollingInfo.rotated = true;
		setTimeout(() => (secondFace.style.zIndex = 1), 550);
		sectionsBox.style.overflow = "auto";
		cube.style.transform = `translateZ(-${window.innerHeight / 2}px) translateY(-${window.innerHeight / 2}px) rotateX(90deg)`;
	}

	const removeScale = e => {
		if (e.animationName === "goAndCome") {
			cubeBox.classList.remove("cube-box--scroll-rotate");

			cubeBox.removeEventListener("animationend", removeScale);
		}
	};
	cubeBox.addEventListener("animationend", removeScale);
};

goDownBtn.onclick = rotateFromHome;

const handleMobilePageRotate = e => {
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
	if (!(e.ctrlKey || e.altKey || e.shiftKey)) {
		if (scrollingInfo.rotated && e.deltaY < 0 && sectionsBox.scrollTop === 0) {
			rotateFromHome();
		} else if (!scrollingInfo.rotated && e.deltaY > 0 && sectionsBox.scrollTop === 0) {
			rotateFromHome(true);
		}
	}
};

const showHeader = e => {
	header.classList.add("header--loaded");
	menu.classList.add("menu--loaded");
};

const addPulsingBtn = e => {
	if (e.animationName === "bigAppear") {
		goDownBtn.classList.add("go-down--loaded");
	}
};

rotateFromHome(true);

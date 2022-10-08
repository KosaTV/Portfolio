const menuSettings = {
	isContactFormOpened: false
};

hamburgerMenu.addEventListener("click", e => {
	toggleMenu();
});

const toggleMenu = (condition = {empty: true}) => {
	condition?.empty ? header.classList.toggle("header--opened") : header.classList.toggle("header--opened", condition);
};

const hidMenu = (bool = true) => {
	bool ? (header.style = "opacity: 0; pointer-events: none;") : header.removeAttribute("style");
};

const toggleContact = e => {
	const slides = contactForm.querySelectorAll(".slide");
	const form = contactForm.querySelector(".form-cnt");
	slides.forEach(item => item.classList.toggle("slide--opened"));
	form.classList.toggle("form-cnt--opened");
	contactForm.classList.toggle("contact-content--opened");
	menuSettings.isContactFormOpened = contactForm.classList.contains("contact-content--opened");
};

const closeContactForm = e => {
	if (menuSettings.isContactFormOpened) {
		toggleContact(e);
		contactForm.addEventListener(
			"transitionend",
			e => {
				hidMenu(!menuSettings.isContactFormOpened);
			},
			{once: true}
		);
		menuSettings.isContactFormOpened = !menuSettings.isContactFormOpened;
	}
};

contactOption.addEventListener("click", e => {
	toggleContact(e);
	hidMenu(menuSettings.isContactFormOpened);
});

contactFormCloseBtn.addEventListener("click", closeContactForm);
document.addEventListener("keydown", e => {
	if (e.key === "Escape") closeContactForm(e);
});

menu.addEventListener("click", e => {
	const menuItem = e.target.closest(".menu__link");
	if (menuItem) {
		if (menuItem.dataset?.side === "cube-1") {
			if (scrollingInfo.rotated) rotateFromHome();
		} else if (menuItem.dataset?.side === "cube-2") {
			if (!scrollingInfo.rotated) rotateFromHome(true);
		}
		toggleMenu();
	}
});

const showHeader = e => {
	header.classList.add("header--loaded");
	menu.classList.add("menu--loaded");
	initializeHomeSection();
};

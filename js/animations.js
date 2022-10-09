const image = document.querySelector(".section__picture");
const drawableItems = document.querySelectorAll(".svg-text__text:not(.svg-text__text--about)");

const addAnimationToItems = (className = "", classToAdd) => {
	const aboutSectionElements = document.querySelectorAll(className);
	aboutSectionElements.forEach(element => {
		const delay = element.dataset.animationDelay;
		delay ? element.classList.add(`${classToAdd}-${delay}`) : element.classList.add(`${classToAdd}`);
	});
};

const addPulsingBtn = e => {
	if (e.animationName === "bigAppear") {
		goDownBtn.classList.add("go-down--pulsing");
	}
};

const observeAndShowElement = (cb, options) => {
	let entries = options.elements.map(element => {
		return {element, viewed: false};
	});

	secondFace.addEventListener("scroll", e => {
		const finalOptions = Object.assign(options, {percentPosition: 50, elements: []});

		entries = entries.map(({element, viewed}) => {
			const elementPosition = element.getBoundingClientRect().top;
			const percentPosition = +((elementPosition / innerHeight) * 100).toFixed();
			if (percentPosition <= finalOptions.percentPosition) {
				viewed = true;

				cb({element, viewed});
			}
			return {element, viewed};
		});
	});
};

const skillsObserver = observeAndShowElement(
	({element, viewed}) => {
		if (viewed) {
			if (element.classList.contains("category-header__svg")) {
				element.classList.toggle(`category-header__svg--animated`, viewed);
				const animatedElements = element.closest(".categories__column").querySelectorAll(".animated-item");
				animatedElements.forEach(item => {
					item.classList.add(`animated-item--animated-${item.dataset.animationDelay}`);
				});
			} else {
				element.classList.toggle(`svg-text__text--loaded`, viewed);
			}
		}
	},
	{percentPosition: 35, elements: [...document.querySelectorAll(".category-header__svg")]}
);

const animateRocket = observeAndShowElement(
	({element, viewed}) => {
		if (viewed && !element.classList.contains("rocket-cnt--showed")) {
			const HTMLFragment = `<iframe class="rocket-cnt__frame" src="https://my.spline.design/rocket-f1d89778409f1d7d05c2c0f6682e62f7/" frameborder="0" width="372" height="322"></iframe>`;
			element.classList.add("rocket-cnt--showed");
			element.innerHTML = HTMLFragment;
			const iFrame = element.querySelector(".rocket-cnt__frame");

			iFrame.onload = () => {
				element.classList.add(`animated-item--animated-${element.dataset.animationDelay}`);
			};
		}
	},
	{percentPosition: 35, elements: [rocketCnt]}
);

const projectObserver = observeAndShowElement(
	({element, viewed}) => {
		element.classList.toggle(`.project-cnt--loaded`, viewed);
		if (viewed) {
			const animatedElements = element.querySelectorAll(".animated-item");
			animatedElements.forEach(item => {
				item.classList.add(`animated-item--animated-${item.dataset.animationDelay}`);
			});
		}
	},
	{percentPosition: 35, elements: [...document.querySelectorAll(".project-cnt")]}
);

const drawedItemsObserver = observeAndShowElement(
	({element, viewed}) => {
		if (viewed) {
			if (element.classList.contains("category-header__svg")) {
				element.classList.toggle(`category-header__svg--animated`, viewed);
				const animatedElements = element.closest(".categories__column").querySelectorAll(".animated-item");
				animatedElements.forEach(item => {
					item.classList.add(`animated-item--animated-${item.dataset.animationDelay}`);
				});
			} else {
				element.classList.toggle(`svg-text__text--loaded`, viewed);
			}
		}
	},
	{percentPosition: 35, elements: [...drawableItems, ...document.querySelectorAll(".category-header__svg")]}
);

const initializeHomeSection = e => {
	addAnimationToItems(".hello-animated", "animated-item--animated");
	addAnimationToItems(".go-down", "go-down--loaded");
};

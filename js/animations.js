const image = document.querySelector(".section__picture");
const drawableItems = document.querySelectorAll(".svg-text__text:not(.svg-text__text--about)");

const addAnimationToItems = (className = "", classToAdd) => {
	const aboutSectionElements = document.querySelectorAll(className);
	aboutSectionElements.forEach(element => {
		console.log(element);
		const delay = element.dataset.animationDelay;
		delay ? element.classList.add(`${classToAdd}-${delay}`) : element.classList.add(`${classToAdd}`);
	});
};

const animatedItemsObserver = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			entry.target.classList.toggle(`animated-item--animated-${entry.target.dataset.animationDelay}`, entry.isIntersecting);

			if (entry.isIntersecting) animatedItemsObserver.unobserve(entry.target);
		});
	},
	{
		threshold: 0,
		rootMargin: "-35%"
	}
);

const drawedItemsObserver = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				if (entry.target.classList.contains("category-header__svg")) {
					entry.target.classList.toggle(`category-header__svg--animated`, entry.isIntersecting);
					const animatedElements = entry.target.closest(".categories__column").querySelectorAll(".animated-item");
					animatedElements.forEach(item => {
						item.classList.add(`animated-item--animated-${item.dataset.animationDelay}`);
					});
				} else {
					entry.target.classList.toggle(`svg-text__text--loaded`, entry.isIntersecting);
				}
				drawedItemsObserver.unobserve(entry.target);
			}
		});
	},
	{
		threshold: 0,
		rootMargin: "-40%"
	}
);

const projectObserver = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			entry.target.classList.toggle(`.project-cnt--loaded`, entry.isIntersecting);

			if (entry.isIntersecting) {
				const animatedElements = entry.target.querySelectorAll(".animated-item");
				animatedElements.forEach(item => {
					item.classList.add(`animated-item--animated-${item.dataset.animationDelay}`);
				});

				drawedItemsObserver.unobserve(entry.target);
			}
		});
	},
	{
		threshold: 0.1,
		rootMargin: "-35%"
	}
);

document.querySelectorAll(`.animated-item:not(.about-animated,.project-cnt .animated-item, .category-header .animated-item, .category-items .animated-item)`).forEach(item => {
	animatedItemsObserver.observe(item);
});

document.querySelectorAll(".category-header__svg").forEach(item => {
	drawedItemsObserver.observe(item);
});

drawableItems.forEach(item => {
	drawedItemsObserver.observe(item);
});

document.querySelectorAll(".project-cnt").forEach(item => {
	projectObserver.observe(item);
});

const addPulsingBtn = e => {
	if (e.animationName === "bigAppear") {
		goDownBtn.classList.add("go-down--pulsing");
	}
};

const initializeHomeSection = e => {
	addAnimationToItems(".hello-animated", "animated-item--animated");
	addAnimationToItems(".go-down", "go-down--loaded");
};

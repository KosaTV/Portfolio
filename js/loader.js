const loader = {
	loading: null,
	sideLeft: null,
	sideRight: null,
	infoBox: null,
	textBox: null,
	text1: null,
	text2: null,
	logo: null,
	loaded: false,
	init() {
		const loading = document.createElement("div");
		loading.classList.add("loading");

		const left = document.createElement("div");
		const right = document.createElement("div");
		left.classList.add("loading__side", "loading__side--left");
		right.classList.add("loading__side", "loading__side--right");

		const infoBox = document.createElement("div");
		infoBox.classList.add("loading__info");

		const logo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		logo.classList.add("loading-logo");

		logo.setAttribute("width", "65");
		logo.setAttribute("height", "93");
		logo.setAttribute("viewBox", "0 0 101 93");
		logo.setAttribute("fill", "none");

		const path1 = `<path
		class="loading-logo__path loading-logo__path--first"
		d="M35.5 10.5L35.0094 47.5C36 87 72.232 93.4606 90 66"
		stroke="white"
		stroke-width="20"
		stroke-linecap="round"
		/>`;

		const path2 = `<path class="loading-logo__path loading-logo__path--second" d="M10.5 82C65.7722 92.515 -6 -12.5 90 15" stroke="#FF0066" stroke-width="20" stroke-linecap="round" />`;

		logo.innerHTML += path1;
		logo.innerHTML += path2;

		const textBox = document.createElement("div");
		textBox.classList.add("loading-text-box");

		const p1 = document.createElement("p");
		const p2 = document.createElement("p");
		p1.classList.add("loading-text-box__p");
		p2.classList.add("loading-text-box__p");

		p1.textContent = "Jacob";
		p2.textContent = "Chodubski";

		this.infoBox = infoBox;
		this.loading = loading;
		this.sideLeft = left;
		this.sideRight = right;
		this.logo = logo;
		this.textBox = textBox;
		this.text1 = p1;
		this.text2 = p2;

		textBox.appendChild(p1);
		textBox.appendChild(p2);

		infoBox.appendChild(logo);
		infoBox.appendChild(textBox);

		loading.appendChild(left);
		loading.appendChild(right);
		loading.appendChild(infoBox);

		document.body.prepend(this.loading);
	},

	onLoaded() {
		loader.sideLeft.classList.add("loading__side--loaded");
		loader.sideRight.classList.add("loading__side--loaded");
		loader.text1.classList.add("loading-text-box__p--loaded");
		loader.text2.classList.add("loading-text-box__p--loaded");
		loader.logo.classList.add("loading-logo--loaded");

		loader.sideLeft.addEventListener("animationend", e => loader.afterLoaded(e));
	},

	afterLoaded(e) {
		showHeader(e);
		document.body.removeChild(this.loading);
		document.addEventListener("wheel", throttle(handleDesktopPageRotate, 1000));
		document.addEventListener("touchstart", e => (scrollingInfo.touchStartY = e.changedTouches[0].clientY));
		document.addEventListener("touchmove", throttle(handleMobilePageRotate, 50));

		goDownBtn.addEventListener("animationend", e => addPulsingBtn(e));
		this.sideLeft.removeEventListener("animationend", this.afterLoaded);
	}
};

loader.init();
window.addEventListener("load", () => {
	loader.onLoaded();
});

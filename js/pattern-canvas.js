const canvas = document.querySelector(".patternCanvas");
const ctx = canvas.getContext("2d");

const geometries = {
	getTriangle: color => {
		ctx.save();
		ctx.fillStyle = "rgba(0, 0, 0, 0)";
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(47, 0);
		ctx.lineTo(47, 42);
		ctx.lineTo(0, 42);
		ctx.closePath();
		ctx.clip();
		ctx.translate(0, 0);
		ctx.translate(0, 0);
		ctx.scale(1, 1);
		ctx.translate(0, 0);
		ctx.strokeStyle = "rgba(0,0,0,0)";
		ctx.lineCap = "butt";
		ctx.lineJoin = "miter";
		ctx.miterLimit = 4;
		ctx.save();
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.beginPath();
		ctx.moveTo(21.3349, 1.75);
		ctx.bezierCurveTo(22.2972, 0.0833361, 24.7028, 0.0833347, 25.6651, 1.75);
		ctx.lineTo(46.0167, 37);
		ctx.bezierCurveTo(46.9789, 38.6667, 45.7761, 40.75, 43.8516, 40.75);
		ctx.lineTo(3.14841, 40.75);
		ctx.bezierCurveTo(1.22391, 40.75, 0.0210905, 38.6667, 0.98334, 37);
		ctx.lineTo(21.3349, 1.75);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();
		ctx.restore();
	},
	getSquare: color => `<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="-0.5" y="0.5" width="52" height="52" rx="4.5" transform="matrix(-1 0 0 1 52 0)" stroke="${color}"/>
    </svg>
    `,
	getStar: color => `<svg width="97" height="92" viewBox="0 0 97 92" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M48.5 1.26414L35.305 31.9043L35.1875 32.177L34.8919 32.2044L1.67391 35.2853L26.737 57.3028L26.96 57.4988L26.8947 57.7884L19.5599 90.3327L48.2447 73.3001L48.5 73.1485L48.7553 73.3001L77.4401 90.3326L70.1053 57.7884L70.04 57.4988L70.263 57.3028L95.3261 35.2853L62.1081 32.2044L61.8125 32.177L61.695 31.9043L48.5 1.26414Z" stroke="#BD00FF"/>
    </svg>
    `,
	getCircle: color => `<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 23.5C0 10.5213 10.5213 0 23.5 0C36.4787 0 47 10.5213 47 23.5C47 36.4787 36.4787 47 23.5 47C10.5213 47 0 36.4787 0 23.5ZM45.6892 23.5C45.6892 11.2452 35.7548 1.31078 23.5 1.31078C11.2452 1.31078 1.31078 11.2452 1.31078 23.5C1.31078 35.7548 11.2452 45.6892 23.5 45.6892C35.7548 45.6892 45.6892 35.7548 45.6892 23.5Z" fill="${color}"/>
    </svg>
    `,
	getText: color => `<svg width="52" height="35" viewBox="0 0 52 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M51 28C41.8009 37.1364 38.3578 31.7558 31.2632 28C25.0897 37.6919 22.5912 34.1101 18.1053 28C9.60223 35.551 6.31752 33.6444 1 28" stroke="${color}" stroke-width="2"/>
    <path d="M51 15C41.8009 24.1364 38.3578 18.7558 31.2632 15C25.0897 24.6919 22.5912 21.1101 18.1053 15C9.60223 22.551 6.31752 20.6444 1 15" stroke="${color}" stroke-width="2"/>
    <path d="M51 2C41.8009 11.1364 38.3578 5.75576 31.2632 2C25.0897 11.6919 22.5912 8.11009 18.1053 2C9.60223 9.551 6.31752 7.64445 1 2" stroke="${color}" stroke-width="2"/>
    </svg>
    `
};

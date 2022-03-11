let renderer, scene, camera, controls;

const canvasWidth = window.innerWidth / 2;

const init = () => {
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(10, canvasWidth / innerWidth, 1, 40);

	renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
	renderer.setSize(canvasWidth / 2, innerHeight / 2);
	aboutModel3d.appendChild(renderer.domElement);
	renderer.domElement.classList.add("model-3d");

	const gltfLoader = new THREE.GLTFLoader();
	let obj;

	//* lights

	const directionlLight = new THREE.DirectionalLight(0xffffff, 2);
	directionlLight.position.set(0, 0, 0);
	directionlLight.castShadow = true;
	scene.add(directionlLight);

	const pointLight = new THREE.PointLight(0xffffff, 0.1);
	pointLight.position.set(100, 100, 100);
	pointLight.castShadow = true;
	scene.add(pointLight);

	gltfLoader.load("../3d/room.gltf", gltf => {
		obj = gltf.scene;
		obj.position.y = -5;
		obj.scale.set(innerWidth / 1000, innerWidth / 1000, innerWidth / 1000);
		scene.add(gltf.scene);
		animate();
	});

	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.maxPolarAngle = Math.PI / 2;
	controls.enableDamping = true;
	controls.maxPan = false;
	controls.autoRotate = true;
	controls.autoRotateSpeed = 0.5;
	controls.enableZoom = false;
	controls.maxZoom = 2;
	controls.minZoom = 2;
	controls.maxDistance = 15;
	controls.minDistance = 15;
	controls.maxAzimuthAngle = 2;
	controls.minAzimuthAngle = 0;
	controls.maxAzimuthAngle = 8;
	controls.enablePan = false;

	const light = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
	scene.add(light);
	camera.position.set(8, 8, 20);
};

const animate = () => {
	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
};

init();

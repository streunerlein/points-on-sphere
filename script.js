
var start = function() {
	var camera, scene, renderer;
	var geometry, material, mesh;
	var controls;

	setupCanvas();
	animate();


	function setupCanvas() {
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 1000;

		scene = new THREE.Scene();

		geometry = new THREE.SphereGeometry(200, 20, 20);
		material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

		var pointMiddle = new THREE.Mesh(new THREE.SphereGeometry(10, 10, 10), new THREE.MeshBasicMaterial({color:0x00ff00}));
		scene.add(pointMiddle);

		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		renderer = new THREE.CanvasRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );

		controls = new THREE.TrackballControls(camera);

		document.body.appendChild(renderer.domElement);
	}

	function animate() {
		requestAnimationFrame(animate);
		render();
	}

	function render() {
		controls.update();

		mesh.rotation.y += 0.02;

		renderer.render(scene, camera);
	}
};
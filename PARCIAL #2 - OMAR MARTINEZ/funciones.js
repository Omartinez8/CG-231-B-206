/*
FUNCIONES PARA LA CREACIÓN DE LOS CUBOS Y 
LA ASIGNACIÓN DE LAS TRANSFORMADAS A LAS TECLAS. 
*/
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
//Escena
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x0000);

var size = 180;
var arrowSize = 8;
var divisions = 100;
var origin = new THREE.Vector3( 0, 0, 0 );
var x = new THREE.Vector3( 1, 0, 0 );
var y = new THREE.Vector3( 0, 1, 0 );
var z = new THREE.Vector3( 0, 0, 1 );
var color2 = new THREE.Color( 0x333333 );  
var colorR = new THREE.Color( 0xAA0000 );
var colorG = new THREE.Color( 0x00AA00 );
var colorB = new THREE.Color( 0x0000AA );

//Crear la Grilla
var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);


//Ejes
var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
scene.add(gridHelperXZ);
scene.add(arrowX);	
scene.add(arrowY);	
scene.add(arrowZ);

//GRILLA
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

//CAMARA
var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 10;
camera.position.x = 5;
camera.position.y = 6;

camera.rotation.set(0, -0.5, 0);



//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//CONTROL MOUSE
var controls = new THREE.OrbitControls(camera, renderer.domElement);


var R = 5;
var geometry1 = new THREE.SphereGeometry(R);
var material = new THREE.MeshBasicMaterial({color: 0xFF4000});
var Sphere = new THREE.Mesh(geometry1, material);

//ESCALADO

var Sx = 0.5;
var Sy = 0.5;
var Sz = 3;

Sphere.scale.x=Sx
Sphere.scale.y=Sy
Sphere.scale.z=Sz

//TRASLACION

var Tx = 0;
var Ty = 1.5;
var Tz = 0;

//Sphere.traslate.x=Tx
//Sphere.traslate.y=Ty
//Sphere.traslate.z=Tz

//ROTACION

//var Rx = Math.PI/2;
var Ry = Math.PI/2;
//var Rz = Math.PI/4;

//Sphere.rotation.x=Rx
Sphere.rotation.y=Ry
//Sphere.rotation.z=Rz

scene.add(Sphere)


// FUNCION RENDERER 
function render() {
requestAnimationFrame(render);
renderer.render(scene, camera);
}


render();

import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(75 , window.innerWidth/window.innerHeight, 0.1 ,10)
camera.position.z=3;

const geometry = new THREE.BoxGeometry(1 , 1 , 1);
const material = new THREE.MeshBasicMaterial({color:0x055254});
const mesh = new THREE.Mesh(geometry , material);
const scene = new THREE.Scene();
scene.add(mesh);

const clock = new THREE.Clock();

window.addEventListener("resize",()=>{
  renderer.setSize(window.innerWidth , window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})


const controls = new OrbitControls(camera , renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;
controls.enableRotate = true;
controls.enableTrackball = true;
controls.enableZoom = true;
controls.enablePan = true;
controls.enableRotate = true;
controls.enableTrackball = true;

function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.z += clock.getElapsedTime() * 0.01;
    renderer.render(scene , camera);
    controls.update();
}
animate();

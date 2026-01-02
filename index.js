import * as THREE from "three";



const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75 , window.innerWidth/window.innerHeight , 0.1 , 10);
camera.position.z = 3;


const geometry = new THREE.BoxGeometry(1 , 1 , 1);
const material = new THREE.MeshBasicMaterial({
    color: 0x055254
})

const mesh = new THREE.Mesh(geometry, material);

const scene = new THREE.Scene();
scene.add(mesh);




function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
}

animate()
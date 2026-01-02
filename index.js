import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js"

// Created a render and set it

const renderer = new THREE.WebGLRenderer({ antialias : true});
renderer.setSize(window.innerWidth , window.innerHeight);

document.body.appendChild(renderer.domElement)

// Create a camera

const camera = new THREE.PerspectiveCamera(75 , window.innerWidth/window.innerHeight , 0.1 , 10);
camera.position.z = 2;

// Create and scene and add object inside it

const geometry = new THREE.IcosahedronGeometry(1 , 2);
const material = new THREE.MeshStandardMaterial({
    color:0xffffff,
    flatShading:true,
});

const wireMat = new THREE.MeshBasicMaterial({
    color:0xffffff,
    wireframe:true,
})

const controls = new OrbitControls(camera , renderer.domElement)
controls.enableDamping =true
controls.dampingFactor = 0.03;
const mesh = new THREE.Mesh(geometry , material);
const wirematmesh = new THREE.Mesh(geometry,wireMat)
mesh.add(wirematmesh)
const scene = new THREE.Scene();

const hemiLight =  new THREE.HemisphereLight(0x00ffff, 0xff00ff, 1.5);
scene.add(hemiLight)

scene.add(mesh);

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene , camera)
    controls.update()
}

animate()




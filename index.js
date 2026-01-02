import * as THREE from "three";

// Created a render and set it

const renderer = new THREE.WebGLRenderer({ antialias : true});
renderer.setSize(window.innerWidth , window.innerHeight);

document.body.appendChild(renderer.domElement)

// Create a camera

const camera = new THREE.PerspectiveCamera(75 , window.innerWidth/window.innerHeight , 0.1 , 10);
camera.position.z = 2;

// Create and scene and add object inside it

const geometry = new THREE.IcosahedronGeometry(1 , 2);
const material = new THREE.MeshBasicMaterial({
    color:0x00ccff
});

const mesh = new THREE.Mesh(geometry,material);
const scene = new THREE.Scene();

scene.add(mesh);


renderer.render(scene , camera)




import * as THREE from "three";

const scene = new THREE.Scene();
const geomatry = new THREE.SphereGeometry(3, 64, 64);
const metarial = new THREE.MeshStandardMaterial({
  color: "#00ff83",
});

const mesh = new THREE.Mesh(geomatry, metarial);
scene.add(mesh);
const camera = new THREE.PerspectiveCamera(45, 800, 600);

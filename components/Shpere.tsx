"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ShpereProps {
  className?: string;
}

const Shpere = ({ className }: ShpereProps) => {
  const elem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 800, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(600, 800);
    elem.current?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "#1aacf0" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return <div ref={elem} className={`${className} overflow-hidden`}></div>;
};
export default Shpere;

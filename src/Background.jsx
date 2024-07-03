import {useEffect, useState} from 'react';
import SceneInit from './lib/SceneInit.js';
import * as three from 'three';
import {gsap} from 'gsap';
import {GLTFLoader} from 'three/examples/jsm/Addons.js';

export default function Background() {
  useEffect(() => {
    const test = new SceneInit("testing");
    test.initialize();
    test.animate();
    test.controls.enabled = false;

    gsap.to(test.controls.target, {x:6, y:5, z:0, duration:3});
    gsap.to(test.camera.position, {x:0, y:5, z:30, duration:3});

    const gltfLoader = new GLTFLoader();
    gltfLoader.load('public/assets/bg/scene.gltf', (gltfScene) => {
      test.scene.add(gltfScene.scene);
    });
  }, []);

  return (
    <>
    <div className="divs">
      <canvas id="testing"></canvas>
    </div>
    </>
  );
};
import {useEffect, useState} from 'react';
import SceneInit from './lib/SceneInit.js';
import * as three from 'three';
import {gsap} from 'gsap';
import {GLTFLoader} from 'three/examples/jsm/Addons.js';

export default function App() {
  const [key, setKey] = useState("");
  useEffect(() => {
    const test = new SceneInit("testing");
    test.initialize();
    test.animate();
    test.controls.enabled = false;

    if (key === 'q') {
      gsap.to(test.controls.target, {x:0, y:5, z:0, duration:5});
      gsap.to(test.camera.position, {x:0, y:5, z:30, duration:5});
    }

    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./assets/bg/scene.gltf', (gltfScene) => {
      test.scene.add(gltfScene.scene);
    });
  }, [key]);

  useEffect(() => {
    window.scrollBy(0, 0);
  }, []);

  return (
    <>
    <div className="divs">
      <canvas id="testing"></canvas>
    </div>
    <button onClick={() => {setKey('q')}}>Click Me</button>
    </>
  );
};
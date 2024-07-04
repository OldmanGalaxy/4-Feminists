import {useEffect, useState} from 'react';
import SceneInit from './lib/SceneInit.js';
import * as three from 'three';
import gsap from 'gsap';
import {GLTFLoader} from 'three/examples/jsm/Addons.js';
import '../src/background.css'
import SplitType from 'split-type';

export default function Background() {
  const [visibility, setVisibility] = useState(0);
  useEffect(() => {
    const test = new SceneInit("testing");
    test.initialize();
    test.animate();
    test.controls.enabled = false;

    function load_bg() {
      gsap.to(test.controls.target, {x:6, y:5, z:0, duration:3});
      gsap.to(test.camera.position, {x:0, y:5, z:30, duration:3});
    };

    function disable_scrolling() {
      window.onscroll = function () {
        window.scrollTo(screenLeft, screenTop);
      };
    }

    function load_title() {
      setVisibility(1);
      const text = new SplitType(".title");
      gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1
      });
    }
    setTimeout(() => load_title(), 1500);

    function remove_title() {
      gsap.to('.char', {
        y: '115vw',
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1
      });
      setTimeout(() => load_bg(), 1000);
    }
    setTimeout(() => remove_title(), 5000);
    setVisibility(0);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load('public/assets/bg/scene.gltf', (gltfScene) => {
      test.scene.add(gltfScene.scene);
    });
  }, []);

  return (
    <>
    <div className="div-model">
      <div className="text-box-container">
        <div className="text">
          <h1 className='title' style={{opacity: visibility}}>Nature</h1>
        </div>
      </div>
      <canvas id="testing"></canvas>
    </div>
    </>
  );
};
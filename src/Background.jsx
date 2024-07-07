import { useEffect, useState, useRef } from 'react';
import SceneInit from './lib/SceneInit.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import gsap from 'gsap';
import SplitType from 'split-type';
import '../src/background.css';

export default function Background() {
  const sceneRef = useRef(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const test = new SceneInit("testing");
    document.body.style.overflow = "hidden";
    test.initialize();
    test.animate();
    test.controls.enabled = false;
    sceneRef.current = test;

    function load_bg() {
      gsap.to(test.controls.target, {x:0, y:0, z:-8, duration:3});
      gsap.to(test.camera.position, {x:0, y:120, z:-5, duration:3});
    }

    function preload_title() {
      const text = new SplitType(".title");
      gsap.to('.char', {
        y: "1000%",
        opacity: 0,
        duration: 0
      });
    }

    function load_title() {
      gsap.to('.char', {
        opacity: 1,
        y: window.innerHeight / 2 - (window.innerWidth * 0.16),
        stagger: 0.05,
        duration: 0.1
      });
    }

    function remove_title() {
      gsap.to('.char', {
        y: '1000%',
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1
      });
      setTimeout(() => load_bg(), 1000);
    }
    preload_title();
    setTimeout(() => load_title(), 1500);
    setTimeout(() => remove_title(), 5000);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load('public/assets/bg/scene.gltf', (gltfScene) => {
      test.scene.add(gltfScene.scene);
    });

    const handleVirtualScroll = (event) => {
      event.preventDefault();
      if (!sceneRef.current) return;
      
      scrollRef.current += event.deltaY;
      scrollRef.current = Math.max(0, Math.min(scrollRef.current, 3000));
    
      const scrollProgress = scrollRef.current / 1000;
    
      if (scrollProgress <= 1) {
        gsap.to(sceneRef.current.camera.position, {
          x: 0 - scrollProgress * 15,
          y: 120 - scrollProgress * 115,
          z: -5 + scrollProgress * 30,
          duration: 0.5
        });
    
        if (sceneRef.current.controls) {
          gsap.to(sceneRef.current.controls.target, {
            x: scrollProgress * 12,
            y: scrollProgress * 4,
            z: -8 + scrollProgress * 2,
            duration: 0.5
          });
        }
      } else if (scrollProgress <= 2) {
        const secondScrollProgress = scrollProgress - 1;
        gsap.to(sceneRef.current.camera.position, {
          x: -15 - secondScrollProgress * 10,
          y: 5 + secondScrollProgress * 3,
          z: 25 + secondScrollProgress * 5,
          duration: 0.5
        });
    
        if (sceneRef.current.controls) {
          gsap.to(sceneRef.current.controls.target, {
            x: 12 + secondScrollProgress * 8,
            y: 4 - secondScrollProgress * 8,
            z: -6 - secondScrollProgress * 10,
            duration: 0.5
          });
        }
      }
      else {
        const thirdScrollProgress = scrollProgress - 2;
        gsap.to(sceneRef.current.camera.position, {
          x: -25 + thirdScrollProgress * 25, //0
          y: 8, //8
          z: 30 + thirdScrollProgress * 10, //40
          duration: 0.5
        });
    
        if (sceneRef.current.controls) {
          gsap.to(sceneRef.current.controls.target, {
            x: 20 - thirdScrollProgress * 14, //6
            y: -4 + thirdScrollProgress * 6, //2
            z: -16 + thirdScrollProgress * 16, //0
            duration: 0.5
          });
        }
      }
    };

    setInterval(() => {
      window.addEventListener('wheel', handleVirtualScroll, { passive: false })
      document.body.style.overflow = "scroll";
    }, 0);
    return () => {
      window.removeEventListener('wheel', handleVirtualScroll);
    };
  }, []);

  return (
    <div className="div-model" style={{ height: '100vh', overflow: 'hidden' }}>
      <div className="text-box-container">
        <div className="text">
          <h1 className='title'>Loading</h1>
        </div>
      </div>
      <canvas id="testing"></canvas>
    </div>
  );
}
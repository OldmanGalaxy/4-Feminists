import * as three from 'three';
import gsap from 'gsap';
import {useEffect, useRef, useState} from 'react';
import './animals.css';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import Animal from "./lib/Animal.js";

export default function Animals() {
    useEffect(() => {
        const frog = new Animal('animal1', [-1.73, 1.08, 4.47]);
        frog.initialize();
        frog.animate();
        frog.controls.target = new three.Vector3(1.68, 0.06, 0.49);
        frog.controls.enableZoom = false;
        frog.controls.enablePan = false;
        frog.controls.enableRotate = false;

        const loader = new GLTFLoader();
        loader.load("croc/scene.gltf", (gltfScene) => {
            frog.scene.add(gltfScene.scene);
        });

        gsap.to("#animal1", {
            width: "50vw",
            duration: 2,
            delay: 1,
            onUpdate: () => frog.onWindowResize()
        });
        gsap.to(".canvas-container", {
            width: "50vw",
            duration: 2,
            delay: 1,
            onUpdate: () => frog.onWindowResize()
        });
        gsap.to(frog.camera.position, {
            x: 0,
            y: 3,
            z: 7.25,
            duration: 2,
            delay: 1,
            onComplete: () => {frog.controls.enableRotate = true}
        });
        gsap.to(frog.controls.target, {
            x: 0.08,
            y: 0.16,
            z: 0.12,
            delay: 1,
            duration: 2
        });
    }, []);

    return (
        <>
        <div className="animated">
            <div className="canvas-container" style={{height: "100vh", width: "100vw"}}>
                <canvas id="animal1"></canvas>
            </div>
            <div className="info-container">
                
            </div>
        </div>
        </>
    );
};
import * as three from 'three';
import gsap from 'gsap';
import {useEffect, useState} from 'react';
import './animals.css';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import Animal from "./lib/Animal.js";

export default function Elephant() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    let animalia = 0;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        animalia = new Animal('animal', [-4.98, 3.68, -3.57]);

        animalia.initialize();
        animalia.animate();
        animalia.controls.target = new three.Vector3(-0.04, -0.77, 0.66);
        animalia.controls.enableZoom = false;
        animalia.controls.enablePan = false;
        animalia.controls.enableRotate = false;

        const loader = new GLTFLoader();
        loader.load("beetle/scene.gltf", (gltfScene) => {
            animalia.scene.add(gltfScene.scene);
        });

        ScrollTrigger.create({
            trigger: ".animal-title",
            start: "top 5%",
            onEnter: () => {
                gsap.to(animalia.camera.position, {
                    x: -6.95,
                    y: 1.83,
                    z: isMobile ? 1.23 : 0.23,
                    trigger: ".animal-title",
                    duration: 2,
                    delay: 1,
                    onComplete: () => {animalia.controls.enableRotate = true}
                });
                gsap.to(animalia.controls.target, {
                    x: 0.3,
                    y: -0.05,
                    z: 0.02,
                    trigger: ".animal-title",
                    delay: 1,
                    duration: 2
                });
            }
        });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    function locations() {
        console.log(animalia.camera.position);
        console.log(animalia.controls.target);
    }

    return (
        <div className="animated">
            <div className="canvas-container" style={{height: isMobile ? "50vh" : "100vh", width: isMobile ? "100vw" : "50vw"}}>
                <canvas id="animal"></canvas>
            </div>
            <div className="info-container">
                <div className="animal-header-container">
                    <h1 className="animal-title"> Rhinoceros Beetle </h1>
                </div>
                <div className="content-wrapper">
                    <div className="content1-container">
                        <p className="para1">
                            <b>Locations:</b> Jharkhand, Odisha, Western Ghats, Nilgiri Hills <br />
                            <b>Population:</b> Unknown <br />
                            <b>Habitat:</b> Woodlands, Humid Forests <br />
                            <b>Threats:</b> Not Listed <br />
                            <b>Weight:</b> 80 - 100 grams <br />
                            <b>Length:</b> 35 - 50 millimetres <br />
                            <b>Status:</b> Not Listed
                        </p>
                        <img src="beetle_locations.png" alt="Locations" className="locations" />
                    </div>
                    <div className="content2-container">
                        <img src="beetle.jpg" alt="Rhinoceros Beetle" className="animal-image" />
                        <p className="para2"> The rhinoceros beetle, recognized for its distinct horn-like structure, is commonly found in the tropical forests of India. These beetles inhabit regions with ample decaying wood and organic matter, essential for their larvae. Despite their intimidating appearance, rhinoceros beetles are harmless to humans and play a vital role in the ecosystem by decomposing dead plant material. Conservation efforts are crucial as habitat loss threatens their population. </p>
                    </div>
                </div>
            </div>
            {/* <button className="test" onClick={locations}>Click Me</button> */}
        </div>
    );
}
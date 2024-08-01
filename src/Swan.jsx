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
        animalia = new Animal('animal', [2.37, 5.7, -4.05]);

        animalia.initialize();
        animalia.animate();
        animalia.controls.target = new three.Vector3(1.62, 3.51, 1.4);
        animalia.controls.enableZoom = false;
        animalia.controls.enablePan = false;
        animalia.controls.enableRotate = false;

        const loader = new GLTFLoader();
        loader.load("swan/scene.gltf", (gltfScene) => {
            animalia.scene.add(gltfScene.scene);
        });

        gsap.to(animalia.camera.position, {
            x: -1.02,
            y: 3.97,
            z: isMobile ? -8.57 : -7.57,
            duration: 2,
            delay: 1,
            onComplete: () => {animalia.controls.enableRotate = true}
        });
        gsap.to(animalia.controls.target, {
            x: 0.96,
            y: 2.42,
            z: 0.96,
            delay: 1,
            duration: 2
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
                    <h1 className="animal-title"> Mute Swan </h1>
                </div>
                <div className="content-wrapper">
                    <div className="content1-container">
                        <p className="para1">
                            <b>Locations:</b> Sightings in Gujarat and West Bengal <br />
                            <b>Population:</b> 5 lakhs <br />
                            <b>Habitat:</b> Tidal Wetlands, Freshwater Wetlands, Inland Lakes <br />
                            <b>Threats:</b> Hunting and Habitat Loss <br />
                            <b>Weight:</b> 8.5 - 12 kilograms <br />
                            <b>Length:</b> 1.2 - 1.7 metres <br />
                            <b>Status:</b> Least Concern
                        </p>
                        <img src="swan_locations.png" alt="Locations" className="locations" />
                    </div>
                    <div className="content2-container">
                        <img src="swan.jpg" alt="Swan" className="animal-image" />
                        <p className="para2"> The mute swan, recognized by its graceful appearance and striking white plumage, is commonly found in wetlands across India. Inhabiting lakes, ponds, and rivers, these swans thrive in tranquil waters rich in vegetation. Known for their elegant S-shaped neck and silent demeanor, mute swans contribute to the beauty and biodiversity of their habitats. However, they face threats from habitat destruction and pollution, necessitating ongoing conservation efforts to ensure their survival. </p>
                    </div>
                </div>
            </div>
            {/* <button className="test" onClick={locations}>Click Me</button> */}
        </div>
    );
}
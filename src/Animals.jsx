import * as three from 'three';
import gsap from 'gsap';
import {useEffect, useState} from 'react';
import './animals.css';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import Animal from "./lib/Animal.js";

export default function Animals() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        const animalia = new Animal('animal1', [-6, 1.08, -10]);
        animalia.initialize();
        animalia.animate();
        animalia.controls.target = new three.Vector3(1.68, 0.06, 0.49);
        animalia.controls.enableZoom = false;
        animalia.controls.enablePan = false;
        animalia.controls.enableRotate = false;

        const loader = new GLTFLoader();
        loader.load("croc/scene.gltf", (gltfScene) => {
            animalia.scene.add(gltfScene.scene);
        });

        gsap.to("#animal1", {
            width: isMobile ? "100vw" : "50vw",
            height: isMobile ? "50vh" : "100vh",
            duration: 2,
            delay: 1,
            onUpdate: () => animalia.onWindowResize()
        });
        gsap.to(".canvas-container", {
            width: isMobile ? "100vw" : "50vw",
            height: isMobile ? "50vh" : "100vh",
            duration: 2,
            delay: 1,
            onUpdate: () => animalia.onWindowResize()
        });
        gsap.to(animalia.camera.position, {
            x: 0,
            y: 3,
            z: isMobile ? 9 : 7.25,
            duration: 2,
            delay: 1,
            onComplete: () => {animalia.controls.enableRotate = true}
        });
        gsap.to(animalia.controls.target, {
            x: 0.08,
            y: 0.16,
            z: 0.12,
            delay: 1,
            duration: 2
        });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    return (
        <div className="animated">
            <div className="canvas-container" style={{height: isMobile ? "50vh" : "100vh", width: isMobile ? "100vw" : "50vw"}}>
                <canvas id="animal1"></canvas>
            </div>
            <div className="info-container">
                <div className="animal-header-container">
                    <h1 className="animal-title">Saltwater Crocodile</h1>
                </div>
                <div className="content-wrapper">
                    <div className="content1-container">
                        <p className="para1">
                            <b>Locations:</b> Odisha, Andhra Pradesh, West Bengal, Tamil Nadu <br />
                            <b>Population:</b> 300 <br />
                            <b>Habitat:</b> Mangroves of Bhittarkanika and Sunderbans, Swamplands of Odisha and West Bengal <br />
                            <b>Threats:</b> Illegal hunting, habitat loss <br />
                            <b>Weight:</b> 1000 - 1500 kilograms <br />
                            <b>Length:</b> 3 - 6.3 metres <br />
                            <b>Status:</b> Threatened species
                        </p>
                        <img src="croc_locations.png" alt="Locations" className="locations" />
                    </div>
                    <div className="content2-container">
                        <img src="saltwater-croc.jpg" alt="Saltwater Crocodile" className="animal-image" />
                        <p className="para2">The saltwater crocodile, India's largest reptile, thrives in the Sundarbans' coastal waters and estuaries. These majestic creatures are vital for ecosystem health but face threats from habitat loss and poaching. Protecting salties helps maintain the balance of our coastal environments and ensures the survival of many other species. Let's unite to safeguard this natural marvel and preserve India's rich biodiversity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
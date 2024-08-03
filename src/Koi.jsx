import * as three from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {useEffect, useState} from 'react';
import './animals.css';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import Animal from "./lib/Animal.js";

export default function Elephant() {
    gsap.registerPlugin(ScrollTrigger);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        const animalia = new Animal('animal', [-5.42, 2.06, 0.33]);

        animalia.initialize();
        animalia.animate();
        animalia.controls.target = new three.Vector3(-0.36, -0.07, -0.09);
        animalia.controls.enableZoom = false;
        animalia.controls.enablePan = false;
        animalia.controls.enableRotate = false;

        const loader = new GLTFLoader();
        loader.load("koi_fish/scene.gltf", (gltfScene) => {
            animalia.scene.add(gltfScene.scene);
        });

        ScrollTrigger.create({
            trigger: ".animal-title",
            start: "top 5%",
            onEnter: () => {
                gsap.to(animalia.camera.position, {
                    x: 0.59,
                    y: 0.92,
                    z: isMobile ? 10.27 : 9.27,
                    duration: 2,
                    delay: 1,
                    onComplete: () => { animalia.controls.enableRotate = true }
                });
                gsap.to(animalia.controls.target, {
                    x: -0.21,
                    y: 0.35,
                    z: -0.37,
                    duration: 2,
                    delay: 1
                });
            }
        });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    return (
        <div className="animated">
            <div className="canvas-container" style={{height: isMobile ? "50vh" : "100vh", width: isMobile ? "100vw" : "50vw"}}>
                <canvas id="animal"></canvas>
            </div>
            <div className="info-container">
                <div className="animal-header-container">
                    <h1 className="animal-title">Koi Carp</h1>
                </div>
                <div className="content-wrapper">
                    <div className="content1-container">
                        <p className="para1">
                            <b>Locations:</b> Andhra Pradesh, Tamil Nadu, Kerala <br />
                            <b>Population:</b> Unknown <br />
                            <b>Habitat:</b> Freshwater <br />
                            <b>Threats:</b> Not Threatened <br />
                            <b>Weight:</b> 16 kilograms <br />
                            <b>Height:</b> 12 - 15 inches <br />
                            <b>Status:</b> Not Listed
                        </p>
                        <img src="koi_locations.png" alt="Locations" className="locations" />
                    </div>
                    <div className="content2-container">
                        <img src="koi.jpg" alt="Koi Carp" className="animal-image" />
                        <p className="para2">The Koi fish, a vibrant variety of the common carp, has found a thriving habitat in various parts of India. Predominantly seen in ornamental ponds and aquaculture setups, their population is steadily increasing due to their popularity in decorative water gardens. Native to East Asia, Koi have adapted well to the Indian climate, flourishing in both natural and artificial water bodies. They are particularly common in the northeastern regions and states with a high interest in aquaculture.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
import * as three from 'three';
import gsap from 'gsap';
import {useEffect, useState} from 'react';
import './animals.css';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import Animal from "./lib/Animal.js";

export default function Elephant() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        const animalia = new Animal('animal', [22.35, 22.76, -6.29]);

        animalia.initialize();
        animalia.animate();
        animalia.controls.target = new three.Vector3(9.32, 20.99, 11.36);
        animalia.controls.enableZoom = false;
        animalia.controls.enablePan = false;
        animalia.controls.enableRotate = false;

        const loader = new GLTFLoader();
        loader.load("cobra/scene.gltf", (gltfScene) => {
            animalia.scene.add(gltfScene.scene);
        });

        gsap.to(animalia.camera.position, {
            x: 39.59,
            y: 24.09,
            z: isMobile ? 25 : 22.46,
            duration: 2,
            delay: 1,
            onComplete: () => {animalia.controls.enableRotate = true}
        });
        gsap.to(animalia.controls.target, {
            x: -1.81,
            y: 13.08,
            z: 1.89,
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
                <canvas id="animal"></canvas>
            </div>
            <div className="info-container">
                <div className="animal-header-container">
                    <h1 className="animal-title"> King Cobra </h1>
                </div>
                <div className="content-wrapper">
                    <div className="content1-container">
                        <p className="para1">
                            <b>Locations:</b> Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Maharashtra, Gujarat, Odisha, West Bengal <br />
                            <b>Population:</b> Unknown <br />
                            <b>Habitat:</b> Streams in dense forests, bamboo thickets, dense mangroves <br />
                            <b>Threats:</b> Habitat Loss and Overharvesting <br />
                            <b>Weight:</b> 5 - 10 kilograms <br />
                            <b>Length:</b> 3.18 - 4 metres <br />
                            <b>Status:</b> Threatened
                        </p>
                        <img src="cobra_locations.png" alt="Locations" className="locations" />
                    </div>
                    <div className="content2-container">
                        <img src="king_cobra.jpg" alt="Cobra" className="animal-image" />
                        <p className="para2"> The King Cobra, the world's longest venomous snake, is predominantly found in the dense forests of India. It thrives in regions like the Western Ghats, Northeast India, and the Andaman Islands. Known for its impressive size and potent venom, this elusive reptile plays a crucial role in controlling the population of other snakes. The King Cobra's habitat is increasingly threatened by deforestation, making conservation efforts vital for its survival. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
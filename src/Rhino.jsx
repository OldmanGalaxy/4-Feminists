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
        animalia = new Animal('animal', [1.07, 1.28, 3.91]);

        animalia.initialize();
        animalia.animate();
        animalia.controls.target = new three.Vector3(-0.23, 0.6, -0.08);
        animalia.controls.enableZoom = false;
        animalia.controls.enablePan = false;
        animalia.controls.enableRotate = false;

        const loader = new GLTFLoader();
        loader.load("rhino/scene.gltf", (gltfScene) => {
            animalia.scene.add(gltfScene.scene);
        });

        gsap.to(animalia.camera.position, {
            x: -5.11,
            y: 0.57,
            z: isMobile ? 1 : 0.16,
            duration: 2,
            delay: 1,
            onComplete: () => {animalia.controls.enableRotate = true}
        });
        gsap.to(animalia.controls.target, {
            x: 0.22,
            y: 0.76,
            z: 0.1,
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
                    <h1 className="animal-title"> White Rhinoceros </h1>
                </div>
                <div className="content-wrapper">
                    <div className="content1-container">
                        <p className="para1">
                            <b>Locations:</b> Congo, Sudan, Chad, South Africa, Zimbabwe, etc. <br />
                            <b>Population:</b> 0 <br />
                            <b>Habitat:</b> Long-grass Savannahs, Short-grass Savannahs <br />
                            <b>Threats:</b> Poaching, Habitat Loss <br />
                            <b>Weight:</b> 1700 - 2300 kilograms <br />
                            <b>Length:</b> 3.4 - 4 metres <br />
                            <b>Status:</b> Extinct
                        </p>
                        <img src="rhino_locations.png" alt="Locations" className="locations" />
                    </div>
                    <div className="content2-container">
                        <img src="rhino.jpg" alt="Rhinoceros" className="animal-image" />
                        <p className="para2"> The white rhinoceros, once native to parts of Africa, is now extinct in the wild. Known for its massive size and distinctive two horns, it primarily inhabited grasslands and savannas. Despite efforts to conserve the species, poaching and habitat loss led to its decline. The white rhinoceros played a crucial role in its ecosystem, helping maintain the grasslands and supporting biodiversity. Conservationists continue to strive for the protection of its close relatives to prevent further losses. </p>
                    </div>
                </div>
            </div>
            {/* <button className="test" onClick={locations}>Click Me</button> */}
        </div>
    );
}
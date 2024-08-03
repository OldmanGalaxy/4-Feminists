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

        const animalia = new Animal('animal', [-10.21, 2.69, 1.16]);
        animalia.initialize();
        animalia.animate();
        animalia.controls.target = new three.Vector3(-0.08, 1.44, 0.82);
        animalia.controls.enableZoom = false;
        animalia.controls.enablePan = false;
        animalia.controls.enableRotate = false;

        const loader = new GLTFLoader();
        loader.load("elephant/scene.gltf", (gltfScene) => {
            animalia.scene.add(gltfScene.scene);
        });

        ScrollTrigger.create({
            trigger: ".animal-title",
            start: "top 5%",
            onEnter: () => {
                gsap.to(animalia.camera.position, {
                    x: 0,
                    y: 2.47,
                    z: isMobile ? 10 : 8.55,
                    duration: 2,
                    delay: 1,
                    onComplete: () => { animalia.controls.enableRotate = true }
                });
                gsap.to(animalia.controls.target, {
                    x: -0.26,
                    y: 1.83,
                    z: 0.68,
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
                    <h1 className="animal-title">Indian Elephant</h1>
                </div>
                <div className="content-wrapper">
                    <div className="content1-container">
                        <p className="para1">
                            <b>Locations:</b> West Bengal, Assam, Nagaland, Mizoram, Odisha, Karnataka, Uttarakhand <br />
                            <b>Population:</b> 27000 <br />
                            <b>Habitat:</b> Deciduous forests, evergreen forests, dry thorn forests <br />
                            <b>Threats:</b> Illegal hunting, habitat loss <br />
                            <b>Weight:</b> 4100 - 5400 kilograms <br />
                            <b>Height:</b> 2.5 - 3.2 metres <br />
                            <b>Status:</b> Endangered species
                        </p>
                        <img src="elephant_locations.png" alt="Locations" className="locations" />
                    </div>
                    <div className="content2-container">
                        <img src="indian-elephant.jpg" alt="Indian Elephant" className="animal-image" />
                        <p className="para2">The Indian elephant, a majestic symbol of India's natural heritage, roams the dense forests and grasslands. These gentle giants are vital for maintaining forest ecosystems. However, they face severe threats from habitat loss and human-wildlife conflict. By protecting Indian elephants, we ensure the survival of numerous other species and the health of our forests. Let's come together to safeguard and preserve the beauty of India's wilderness.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { useEffect, useState, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import gsap from "gsap";
import SplitType from "split-type";
import "./background.css";
import Island from "./lib/Island.js";
import Textbox from "./Textbox.jsx";

export default function Background() {
  const sceneRef = useRef(null);
  const scrollRef = useRef(0);
  const bground = new Island("island");

  useEffect(() => {
    
    document.body.style.overflow = "hidden";
    bground.initialize();
    bground.animate();
    bground.controls.enabled = false;
    sceneRef.current = bground;

    function load_bg() {
      gsap.to(bground.controls.target, {
        x: 0,
        y: 0,
        z: -8,
        duration: 3,
      });
      gsap.to(bground.camera.position, {
        x: -11.27,
        y: 6.75,
        z: 43.16,
        duration: 2,
        onComplete: () => {
          gsap.to(bground.camera.position, {
            x: 0,
            y: 120,
            z: -5,
            duration: 2
          })
        }
      });
      gsap.to(".text-box-container", {
        height: 0,
        zIndex: -100,
        duration: 1,
      });
    }

    function preload_title() {
      const text = new SplitType(".title");
      gsap.to(".char", {
        y: "1000%",
        opacity: 0,
        duration: 0,
      });
    }

    function load_title() {
      gsap.to(".char", {
        opacity: 1,
        y: window.innerHeight / 2 - window.innerWidth * 0.16,
        stagger: 0.05,
        duration: 0.1,
      });
    }

    function remove_title() {
      gsap.to(".char", {
        y: "1000%",
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
      setTimeout(() => load_bg(), 1000);
    }
    preload_title();
    setTimeout(() => load_title(), 1500);
    setTimeout(() => remove_title(), 5000);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load("bg/scene.gltf", (gltfScene) => {
      bground.scene.add(gltfScene.scene);
    });

    const handleVirtualScroll = (event) => {
      event.preventDefault();
      if (!sceneRef.current) return;

      scrollRef.current += event.deltaY;
      scrollRef.current = Math.max(0, Math.min(scrollRef.current, 3000));

      const scrollProgress = scrollRef.current / 1000;

      if (scrollProgress <= 1)
      {
        gsap.to(sceneRef.current.camera.position, {
          x: 0 - scrollProgress * 15,
          y: 120 - scrollProgress * 115,
          z: -5 + scrollProgress * 30,
          duration: 1,
        });

        gsap.to(".first", {
          top: window.innerHeight * (1.25 - scrollProgress),
          opacity: 1,
          duration: 0.5,
        });

        if (sceneRef.current.controls)
        {
          gsap.to(sceneRef.current.controls.target, {
            x: scrollProgress * 12,
            y: scrollProgress * 4,
            z: -8 + scrollProgress * 2,
            duration: 1,
          });
        }
      }
      else if (scrollProgress <= 2)
      {
        const secondScrollProgress = scrollProgress - 1;
        gsap.to(sceneRef.current.camera.position, {
          x: -15 - secondScrollProgress * 10,
          y: 5 + secondScrollProgress * 3,
          z: 25 + secondScrollProgress * 5,
          duration: 1,
        });

        gsap.to(".first", {
          top: window.innerHeight * (0 - secondScrollProgress),
          opacity: 0,
          duration: 1,
        });

        gsap.to(".second", {
          top: window.innerHeight * (1.25 - secondScrollProgress),
          opacity: 1,
          duration: 0.5,
        });

        if (sceneRef.current.controls)
        {
          gsap.to(sceneRef.current.controls.target, {
            x: 12 + secondScrollProgress * 8,
            y: 4 - secondScrollProgress * 8,
            z: -6 - secondScrollProgress * 10,
            duration: 1,
          });
        }
      }
      else
      {
        const thirdScrollProgress = scrollProgress - 2;
        gsap.to(sceneRef.current.camera.position, {
          x: -25 + thirdScrollProgress * 25, //0
          y: 8, //8
          z: 30 + thirdScrollProgress * 10, //40
          duration: 1,
        });

        gsap.to(".second", {
          top: window.innerHeight * (0 - thirdScrollProgress),
          opacity: 0,
          duration: 1,
        });

        gsap.to(".third", {
          top: window.innerHeight * (1.25 - thirdScrollProgress),
          opacity: 1,
          duration: 0.5,
        });

        if (sceneRef.current.controls)
        {
          gsap.to(sceneRef.current.controls.target, {
            x: 20 - thirdScrollProgress * 14, //6
            y: -4 + thirdScrollProgress * 6, //2
            z: -16 + thirdScrollProgress * 16, //0
            duration: 1,
          });
        }
      }
    };

    setInterval(() => {
      window.addEventListener("wheel", handleVirtualScroll, { passive: false });
      document.body.style.overflow = "scroll";
    }, 10500);

    return () => {
      window.removeEventListener("wheel", handleVirtualScroll);
    };
  }, []);

  function locations() {
    console.log(bground.camera.position);
    console.log(bground.controls.target);
  }

  return (
    <>
      <div className="div-model" style={{ height: "100vh", overflow: "hidden" }}>
        <div className="text-box-container">
          <div className="text">
            <h1 className="title">Loading</h1>
          </div>
        </div>
        <div className="canvas-container">
          <canvas id="island"></canvas>
        </div>
      </div>
      {/* <button className="testing" onClick={locations} style={{position: "absolute", top: 0}}>Click Me</button> */}
      <div className="first" style={{ position: "absolute", top: "100%", opacity: "0", left: "5%", zIndex: 0 }}>
        <Textbox>
          <div className="textbox-content">
            <h2 className="textbox-title">Like Nature?</h2>
            <p className="textbox-paragraph">
              Well most people do, and we intend to keep it as such. Here at
              Forest Focus, we are dedicated to spread awareness against
              deforestation or any other degrading processes. We plan to make
              others realize the true value of forests in their lives.
            </p>
          </div>
          <div className="firefly-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="firefly"></div>
            ))}
          </div>
        </Textbox>
      </div>
      <div className="second" style={{ position: "absolute", top: "100%", opacity: "0", left: "5%", zIndex: 0 }}>
        <Textbox>
          <div className="textbox-content">
            <h2 className="textbox-title">Explore Wildlife</h2>
            <p className="textbox-paragraph">
              Ever wonder what animals have gone extinct? Well now you can
              see what they looked like, and many other details about them.
              We intend to let you explore what animals have gone extinct, so have a crack!
            </p>
            <a href="/wildlife" className="textbox-link">Go to Wildlife</a>
          </div>
          <div className="firefly-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="firefly"></div>
            ))}
          </div>
        </Textbox>
      </div>
      <div className="third" style={{ position: "absolute", top: "100%", opacity: "0", left: "5%", zIndex: 0 }}>
        <Textbox>
          <div className="textbox-content">
            <h2 className="textbox-title">Meet the Creators</h2>
            <p className="textbox-paragraph">
              Want to know more about the creators of Forest Focus?
              Click on the link below to get to know each of us
              and more of what we do. The team here at Forest Focus are waiting for you. Click now!
            </p>
            <a href="/about" className="textbox-link">Meet Us!</a>
          </div>
          <div className="firefly-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="firefly"></div>
            ))}
          </div>
        </Textbox>
      </div>
    </>
  );
}
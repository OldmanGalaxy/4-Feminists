import { useEffect, useState, useRef } from "react";
import "./awareness.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Awareness() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const onPageLoad = () => {
      const load1 = gsap.from(".title1", {
        y: "-100vh",
        duration: 1,
        fontSize: 0,
        ease: "bounce.in",
      });

      const load2 = gsap.from(".title2", {
        y: "200vh",
        duration: 1,
        fontSize: 0,
        ease: "bounce.in",
      });

      ScrollTrigger.create({
        animation: load2,
        trigger: ".heading2",
      });

      ScrollTrigger.create({
        animation: load1,
        trigger: ".heading1",
      });
    };

    if (document.readyState === "complete") onPageLoad();
    else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      <section className="before-container divs">
        <div className="gap"></div>
        <div className="heading-container heading1">
          <h1 className="heading title1">Like This View?</h1>
        </div>
      </section>
      <section className="after-container divs">
        <div className="gap"></div>
        <div className="heading-container heading2">
          <h1 className="heading title2">Or This One?</h1>
        </div>
      </section>
      <section className="info-container divs">
        <div className="deforestation-info-container">
          <div className="deforestation-header-container">
            <h1 className="deforestation-header">Help Us</h1>
          </div>
          <div className="content-container">
            <div className="para1-container">Every action counts in the fight against deforestation. Help by supporting sustainable forestry practices and choosing products with eco-friendly certifications. Reduce, reuse, and recycle to minimize waste and lessen the demand for raw materials. Advocate for stronger environmental policies and participate in reforestation projects. Together, we can preserve our forests for future generations.</div>
            <div className="image1-container">
              <img src="afforestation.jpg" alt="" className="image1" />
            </div>
          </div>
          <div className="helpfulness-container">
            <div className="tips-container">
              <div className="tip1 tips">Share this site to as many people as you can.</div>
              <div className="tip2 tips">If you see anything that can harm forests, immediately report it.</div>
              <div className="tip3 tips">Plant 5 trees and make the world cleaner.</div>
              <div className="tip4 tips">If you see animals being harmed, please do report it.</div>
              <div className="tip5 tips">Do not pollute the environment.</div>
            </div>
          </div>
        </div>
        <div className="slider-container"></div>
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import './awareness.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Awareness() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const onPageLoad = () => {
            const load1 = gsap.from(".title1", {
                y: "-100vh",
                duration: 1,
                fontSize: 0,
                ease: "bounce.in",
            })

            const load2 = gsap.from(".title2", {
                y: "200vh",
                duration: 1,
                fontSize: 0,
                ease: "bounce.in",
            })

            ScrollTrigger.create({
                animation: load2,
                trigger: ".heading2",
            })

            ScrollTrigger.create({
                animation: load1,
                trigger: ".heading1",
            })
        };
      
          if (document.readyState === 'complete')
            onPageLoad();
          else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
          }
    }, []);

    return (
        <>
            <div className="container1">
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
                    <div className="gap"></div>
                    <div className="deforestation-info-container">
                        <div className="deforestation-header-container">
                            <h1 className="deforestation-header"></h1>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
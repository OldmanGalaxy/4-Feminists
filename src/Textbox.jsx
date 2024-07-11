import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './textbox.css';

const Textbox = (props) => {
  const containerRef = useRef(null);

  const createRipple = (event) => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = event.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    event.target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  useEffect(() => {
    const fireflies = containerRef.current.querySelectorAll('.firefly');
    fireflies.forEach((firefly) => {
      animateFirefly(firefly);
    });
  }, []);

  const animateFirefly = (firefly) => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(firefly, {
      x: 'random(-200, 200)',
      y: 'random(-200, 200)',
      opacity: 'random(0.3, 0.8)',
      duration: 'random(3, 6)',
      ease: 'power1.inOut',
    });
  };

  return (
    <div className="textbox-container" ref={containerRef} onClick={createRipple}>
      <div className="textbox-content">
        <h2 className="textbox-title">{props.title}</h2>
        <p className="textbox-paragraph">
            {props.text}
        </p>
      </div>
      <div className="firefly-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="firefly"></div>
        ))}
      </div>
      <span className="ripple"></span>
    </div>
  );
};

export default Textbox;
import React, { useRef, useEffect,children } from 'react';
import { gsap } from 'gsap';
import './textbox.css';

const Textbox = ({children}) => {
  const containerRef = useRef(null);

  const createRipple = (event) => {
    const container = containerRef.current;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    container.appendChild(ripple);

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
      x: 'random(-100, 100)',
      y: 'random(-100, 100)',
      opacity: 'random(0.3, 0.8)',
      duration: 'random(3, 6)',
      ease: 'power1.inOut',
    });
  };

  return (
    <div className="textbox-container" ref={containerRef} onClick={createRipple}>
      {children}
    </div>
  );
};

export default Textbox;
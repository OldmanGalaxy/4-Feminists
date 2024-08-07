import React, { useEffect, useRef } from 'react';
import './blogcard.css';

export default function BlogCard(props)
{
  const cardRef = useRef(null);

  useEffect(() => {
    const handleCardMouseMove = (e, card) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
  
        const centerX = rect.width / 2
        const centerY = rect.height / 2
  
        const angleX = (y - centerY) / centerY * 10
        const angleY = (centerX - x) / centerX * 10
  
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.03)`
      }
  
      const handleCardMouseLeave = (card) => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
      }
  
      document.querySelectorAll('.hover-card').forEach(card => {
        card.addEventListener('mousemove', (e) => handleCardMouseMove(e, card))
        card.addEventListener('mouseleave', () => handleCardMouseLeave(card))
      })
    });

    return (
        <article className="hover-card" ref={cardRef}>
          <div className="hover-image">
            <img src={props.image} alt="Animal Photo"/>
          </div>
            <div className="hover-content">
              <h3>{props.title}</h3>
              <p>{props.paragraph}</p>
              <a href={props.link} target="_blank" className="hover-read-more">Read More</a>
            </div>
        </article>
      );
};
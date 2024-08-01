import { useEffect } from "react";
import './about.css';

export default function About() {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            const features = document.querySelectorAll('.feature');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }
                });
            }, { threshold: 0.1 });

            features.forEach(feature => {
                feature.style.opacity = 0;
                feature.style.transform = 'translateY(50px) scale(0.9)';
                observer.observe(feature);
            });
        });
    }, []);

    return (
        <>
        <header className="header">
        <div className="container">
            <h1>Growing Awareness, Saving the Woods</h1>
            <p>Delving into the world of forestry: Discover the vital role of trees in our ecosystems and economy. From ancient woodlands to urban greenspaces, explore how forests shape our planet and our future.</p>
        </div>
    </header>

    <section className="features">
        <div className="feature">
            <i className="fas fa-rocket"></i>
            <h3>Innovation</h3>
            <p>Cutting-edge forest mapping technologies.</p>
        </div>
        <div className="feature">
            <i className="fas fa-users"></i>
            <h3>Collaboration</h3>
            <p>Partnerships with leading environmental organizations.</p>
        </div>
        <div className="feature">
            <i className="fas fa-shield-alt"></i>
            <h3>Security</h3>
            <p>Real-time wildfire detection and response systems, conservation plans for endangered forest species.</p>
        </div>
        <div className="feature">
            <i className="fas fa-chart-line"></i>
            <h3>Growth</h3>
            <p>Tracking tools for forest expansion and health.</p>
        </div>
        <div className="feature">
            <i className="fas fa-globe"></i>
            <h3>Global Reach</h3>
            <p>Global network of forestry professionals.</p>
        </div>
        <div className="feature">
            <i className="fas fa-handshake"></i>
            <h3>Your Opportunity to Contribute</h3>
            <p>Volunteering opportunities in local forest management.</p>
        </div>
    </section>
    </>
    )
};
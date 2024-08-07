import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUsers, faShieldAlt, faChartLine, faGlobe, faHandshake, faTree, faSeedling, faBookReader } from '@fortawesome/free-solid-svg-icons';
import './about.css';

const AboutUs = () => {
    useEffect(() => {
        const features = document.querySelectorAll('.feature');
        const missionItems = document.querySelectorAll('.mission-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            });
        }, { threshold: 0.1 });

        [...features, ...missionItems].forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(50px) scale(0.9)';
            observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='about-us-container'>
            <header className="header">
                <div className="container">
                    <h1>Growing Awareness, Saving the Woods</h1>
                    <p>Delving into the world of forestry: Discover the vital role of trees in our ecosystems and economy. From ancient woodlands to urban greenspaces, explore how forests shape our planet and our future.</p>
                </div>
            </header>

            <section className="features">
                <div className="feature">
                    <FontAwesomeIcon icon={faRocket} />
                    <h3>Innovation</h3>
                    <p>Cutting-edge forest mapping technologies.</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faUsers} />
                    <h3>Collaboration</h3>
                    <p>Partnerships with leading environmental organizations.</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <h3>Security</h3>
                    <p>Real-time wildfire detection and response systems, conservation plans for endangered forest species.</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faChartLine} />
                    <h3>Growth</h3>
                    <p>Tracking tools for forest expansion and health.</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faGlobe} />
                    <h3>Global Reach</h3>
                    <p>Global network of forestry professionals.</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faHandshake} />
                    <h3>Your Opportunity to Contribute</h3>
                    <p>Volunteering opportunities in local forest management.</p>
                </div>
            </section>

            <section className="mission">
                <div className="container">
                    <h2>Our Mission</h2>
                    <div className="mission-items">
                        <div className="mission-item">
                            <FontAwesomeIcon icon={faTree} />
                            <h3>Preserve</h3>
                            <p>Protect existing forests and promote sustainable management practices.</p>
                        </div>
                        <div className="mission-item">
                            <FontAwesomeIcon icon={faSeedling} />
                            <h3>Restore</h3>
                            <p>Rehabilitate degraded forest lands through strategic reforestation efforts.</p>
                        </div>
                        <div className="mission-item">
                            <FontAwesomeIcon icon={faBookReader} />
                            <h3>Educate</h3>
                            <p>Raise awareness about the importance of forests and sustainable practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="impact">
                <div className="container">
                    <h2>Our Impact</h2>
                    <div className="impact-stats">
                        <div className="stat">
                            <h3>1M+</h3>
                            <p>Trees Planted</p>
                        </div>
                        <div className="stat">
                            <h3>50+</h3>
                            <p>Conservation Projects</p>
                        </div>
                        <div className="stat">
                            <h3>100K+</h3>
                            <p>Volunteers Engaged</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
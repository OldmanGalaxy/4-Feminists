import {useEffect} from 'react';
import './blogs.css';

export default function Blog1() {
    useEffect(() => {
        const backToTopButton = document.getElementById("blog1-back-to-top");

        if (backToTopButton) {
            const handleScroll = () => {
                if (window.pageYOffset > 300) {
                    backToTopButton.style.display = "block";
                } else {
                    backToTopButton.style.display = "none";
                }
            };

            const scrollToTop = () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            };

            window.addEventListener("scroll", handleScroll);
            backToTopButton.addEventListener("click", scrollToTop);

            return () => {
                window.removeEventListener("scroll", handleScroll);
                backToTopButton.removeEventListener("click", scrollToTop);
            };
        }
    }, []);

    return (
        <>
        <div className="blog1-container">
            <header className="blog1-header">
                <h1 className="blog1-title">Green Cities: The Rise of Urban Forestry and Its Impact on Modern Life</h1>
            </header>
    
            <div id="blog1-table-of-contents">
                <h2>Table of Contents</h2>
                <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#what-is-urban-forestry">What is Urban Forestry?</a></li>
                <li><a href="#benefits">Benefits of Urban Forestry</a></li>
                <li><a href="#challenges">Challenges in Urban Forestry</a></li>
                <li><a href="#case-studies">Case Studies and Examples</a></li>
                <li><a href="#future">Future of Urban Forestry</a></li>
                <li><a href="#conclusion">Conclusion</a></li>
            </ul>
        </div>
    
        <section id="blog1-introduction">
                <h2>Introduction</h2>
                <p>In an era of rapid urbanization, the concept of urban forestry has emerged as a beacon of hope for creating sustainable, livable cities. As concrete jungles expand, the need for green spaces becomes increasingly crucial. This blog post delves into the world of urban forestry, exploring its significance, benefits, challenges, and future prospects in shaping our urban landscapes.</p>
            </section>
    
        <section id="blog1-what-is-urban-forestry">
            <h2>What is Urban Forestry?</h2>
            <p>Urban forestry is the careful planning, planting, protection, and care of trees, forests, greenway connections and other natural resources in and around urban areas. It encompasses not just individual trees along streets or in parks, but entire ecosystems within city limits.</p>
            
            <div class="blog1-image-container">
                <img src="/blog1_img1.jpg" alt="Urban forest in a city" />
                <p class="blog1-image-caption">A thriving urban forest integrated into a cityscape</p>
            </div>
            
            <p>Key components of urban forestry include:</p>
            <ul>
                <li>Street trees and park landscapes</li>
                <li>Public and private gardens</li>
                <li>Urban wildlife habitats</li>
                <li>Watershed management areas</li>
                <li>Greenways and ecological corridors</li>
            </ul>
        </section>
    
        <section id="blog1-benefits">
            <h2>Benefits of Urban Forestry</h2>
            <p>The integration of forests into urban planning brings numerous advantages:</p>
            
            <h3>Environmental Benefits</h3>
            <ul>
                <li>Improved air quality through pollution absorption</li>
                <li>Carbon sequestration, aiding in climate change mitigation</li>
                <li>Temperature regulation, reducing urban heat island effect</li>
                <li>Stormwater management and erosion control</li>
            </ul>
            
            <h3>Social Benefits</h3>
            <ul>
                <li>Enhanced mental health and well-being</li>
                <li>Increased opportunities for recreation and community engagement</li>
                <li>Aesthetic improvement of urban landscapes</li>
                <li>Noise reduction</li>
            </ul>
            
            <h3>Economic Benefits</h3>
            <ul>
                <li>Increased property values</li>
                <li>Energy savings through natural cooling</li>
                <li>Potential for urban agriculture and food security</li>
                <li>Job creation in forestry and related industries</li>
            </ul>
            
            <div class="blog1-image-container">
                <img src="/blog1_img2.jpg" alt="People enjoying an urban park" />
                <p class="blog1-image-caption">Urban forests provide spaces for recreation and community engagement</p>
            </div>
        </section>
    
        <section id="blog1-challenges">
            <h2>Challenges in Urban Forestry</h2>
            <p>Despite its many benefits, urban forestry faces several obstacles:</p>
            <ul>
                <li>Limited space in densely populated areas</li>
                <li>Soil compaction and pollution</li>
                <li>Conflicts with urban infrastructure (e.g., utility lines)</li>
                <li>Budget constraints for maintenance and new plantings</li>
                <li>Climate change impacts on tree health and species selection</li>
                <li>Balancing development needs with forest conservation</li>
            </ul>
            
            <blockquote>
                "The challenge of urban forestry lies not in planting trees, but in growing forests that thrive amidst the concrete and asphalt of our cities." - Dr. Cecil Konijnendijk, urban forestry expert
            </blockquote>
        </section>
    
        <section id="blog1-case-studies">
            <h2>Case Studies and Examples</h2>
            <h3>New York City's Million Trees Initiative</h3>
            <p>Launched in 2007, this program aimed to plant and care for one million new trees across New York City's five boroughs. The initiative was completed in 2015, two years ahead of schedule, significantly increasing the city's urban forest.</p>
            
            <h3>Singapore: The Garden City</h3>
            <p>Singapore has transformed itself from a concrete jungle to a garden city through extensive urban forestry programs. The city-state boasts over 300 km of green corridors and aims to have 85% of residents living within 400 meters of a park by 2030.</p>
            
            <div class="blog1-image-container">
                <img src="/blog1_img3.jpg" alt="Singapore's Gardens by the Bay" />
                <p class="blog1-image-caption">Singapore's Gardens by the Bay, an example of innovative urban forestry</p>
            </div>
            
            <h3>Melbourne's Urban Forest Strategy</h3>
            <p>Melbourne, Australia, developed a comprehensive urban forest strategy to increase canopy cover, improve water quality, and create an urban forest resilient to climate change. The city aims to increase canopy cover from 22% to 40% by 2040.</p>
        </section>
    
        <section id="blog1-future">
            <h2>Future of Urban Forestry</h2>
            <p>The future of urban forestry looks promising, with several emerging trends:</p>
            <ul>
                <li>Integration of smart technology for tree health monitoring and maintenance</li>
                <li>Development of vertical forests and green buildings</li>
                <li>Increased focus on native and climate-resilient species</li>
                <li>Expansion of urban food forests and community gardens</li>
                <li>Greater emphasis on biodiversity and wildlife corridors in urban areas</li>
            </ul>
            
            <p>As cities continue to grow, urban forestry will play an increasingly vital role in creating sustainable, resilient, and livable urban environments for future generations.</p>
        </section>
    
        <section id="blog1-conclusion">
            <h2>Conclusion</h2>
            <p>Urban forestry represents a powerful tool in our quest for sustainable urban development. By integrating nature into our cities, we can create healthier, more resilient, and more livable urban spaces. As we face the challenges of climate change and rapid urbanization, the importance of urban forests will only continue to grow. It's time for city planners, policymakers, and citizens alike to embrace the green revolution and work together to foster thriving urban forests for the benefit of all.</p>
        </section>
        <button id="blog1-back-to-top" title="Back to Top">↑ Top</button>
        </div>
        </>
    );
}
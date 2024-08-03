import React, { useEffect } from 'react'
import './mainblog.css'

const Mainblog = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset
      const forestBackground = document.querySelector('.forest-background')
      if (forestBackground) {
        forestBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.blog-card').forEach(card => {
      observer.observe(card)
    })

    const createLeaf = () => {
      const leaf = document.createElement('div')
      const leafTypes = ['leaf1', 'leaf2', 'leaf3', 'leaf4']
      leaf.classList.add('leaf', leafTypes[Math.floor(Math.random() * leafTypes.length)])
      leaf.style.left = `${Math.random() * 100}vw`
      leaf.style.animationDuration = `${Math.random() * 10 + 15}s`
      leaf.style.animationDelay = `${Math.random() * 20}s`
      leaf.style.animation = `leaf-fall ${leaf.style.animationDuration} linear ${leaf.style.animationDelay} infinite`
      
      const leavesContainer = document.querySelector('.leaves-overlay')
      if (leavesContainer) {
        leavesContainer.appendChild(leaf)

        leaf.addEventListener('animationiteration', () => {
          leaf.remove()
          createLeaf()
        })
      }
    }

    const numLeaves = 50
    for (let i = 0; i < numLeaves; i++) {
      createLeaf()
    }

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

    document.querySelectorAll('.blog-card').forEach(card => {
      card.addEventListener('mousemove', (e) => handleCardMouseMove(e, card))
      card.addEventListener('mouseleave', () => handleCardMouseLeave(card))
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.querySelectorAll('.blog-card').forEach(card => {
        card.removeEventListener('mousemove', handleCardMouseMove)
        card.removeEventListener('mouseleave', handleCardMouseLeave)
      })
    }
  }, [])

  return (
    <div className='main-blog'>
      <div className="bg-img">
        <img src="/5386360.jpg" alt="" />
      </div>
      <div className="leaves-overlay"></div>

      <main className="blog-container">
        <h2 className="section-title" id="animatedTitle">Latest Insights from the Forest</h2>
        
        <div className="blog-grid">
          {/* Blog 1 */}
          <article className="blog-card">
            <div className="card-image" style={{backgroundImage: "url('/blog5_img1.jpg')"}}></div>
            <div className="card-content">
              <div className="category-tags">
                <span className="tag">Conservation</span>
                <span className="tag">Career</span>
              </div>
              <h3>Into the Wild: 24 Hours with a Forest Guardian</h3>
              <p>Experience a day in the life of a forest ranger, from dawn patrols to nighttime vigilance, safeguarding nature's treasures and protecting wildlife from poachers and...</p>
              <div className="card-meta">
                <div className="author-info">
                  <img src="" alt="Author" className="author-avatar" />
                  <span className="author-name">Parmar Nirmeet</span>
                </div>
              </div>
              <a href="/blog1" className="read-more">Read More</a>
              <div className="social-share">
                <button className="share-btn" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></button>
                <button className="share-btn" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></button>
                <button className="share-btn" aria-label="Share on LinkedIn"><i className="fab fa-linkedin-in"></i></button>
              </div>
            </div>
          </article>

          {/* Blog 2 */}
          <article className="blog-card">
            <div className="card-image" style={{backgroundImage: "url('/blog6_img1.jpg')"}}></div>
            <div className="card-content">
              <div className="category-tags">
                <span className="tag">Ecotourism</span>
                <span className="tag">Adventure</span>
              </div>
              <h3>Rainforest Adventures: Navigating the Amazon's Canopy Walks and Eco-Lodges</h3>
              <p>Embark on a thrilling journey through the Amazon, exploring canopy walks and sustainable eco-lodges...</p>
              <div className="card-meta">
                <div className="author-info">
                  <img src="https://source.unsplash.com/30x30/?portrait" alt="Author" className="author-avatar" />
                  <span className="author-name">Parmar Nirmeet</span>
                </div>
              </div>
              <a href="/blog2" className="read-more">Read More</a>
              <div className="social-share">
                <button className="share-btn" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></button>
                <button className="share-btn" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></button>
                <button className="share-btn" aria-label="Share on LinkedIn"><i className="fab fa-linkedin-in"></i></button>
              </div>
            </div>
          </article>

          {/* Blog 3 */}
          <article className="blog-card">
            <div className="card-image" style={{backgroundImage: "url('/blog1_img1.jpg')"}}></div>
            <div className="card-content">
              <div className="category-tags">
                <span className="tag">Sustainable Management</span>
                <span className="tag">Conservation</span>
              </div>
              <h3>Sustainable Forest Management: Balancing Conservation and Utilization</h3>
              <p>Discover how sustainable forest management practices are preserving ecosystems while meeting human needs...</p>
              <div className="card-meta">
                <div className="author-info">
                  <img src="https://source.unsplash.com/30x30/?portrait" alt="Author" className="author-avatar" />
                  <span className="author-name">Parmar Nirmeet</span>
                </div>
              </div>
              <a href="/blog3" className="read-more">Read More</a>
              <div className="social-share">
                <button className="share-btn" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></button>
                <button className="share-btn" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></button>
                <button className="share-btn" aria-label="Share on LinkedIn"><i className="fab fa-linkedin-in"></i></button>
              </div>
            </div>
          </article>
          
          {/* Blog 4 */}
          <article className="blog-card">
            <div className="card-image" style={{backgroundImage: "url('/blog2_img1.jpg')"}}></div>
            <div className="card-content">
              <div className="category-tags">
                <span className="tag">Urban Forestry</span>
                <span className="tag">Sustainability</span>
              </div>
              <h3>Green Cities: The Rise of Urban Forestry</h3>
              <p>Explore the impact of urban forestry on modern life and sustainable city development...</p>
              <div className="card-meta">
                <div className="author-info">
                  <img src="https://source.unsplash.com/30x30/?portrait" alt="Author" className="author-avatar" />
                  <span className="author-name">Parmar Nirmeet</span>
                </div>
              </div>
              <a href="/blog4" className="read-more">Read More</a>
              <div className="social-share">
                <button className="share-btn" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></button>
                <button className="share-btn" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></button>
                <button className="share-btn" aria-label="Share on LinkedIn"><i className="fab fa-linkedin-in"></i></button>
              </div>
            </div>
          </article>

          {/* Blog 5 */}
          <article className="blog-card">
            <div className="card-image" style={{backgroundImage: "url('/blog3_img3.jpg')"}}></div>
            <div className="card-content">
              <div className="category-tags">
                <span className="tag">Reforestation</span>
                <span className="tag">Afforestation</span>
              </div>
              <h3>Reforestation and Afforestation Projects: Successes and Challenges</h3>
              <p>Learn about the triumphs and obstacles in global efforts to restore and expand forest cover...</p>
              <div className="card-meta">
                <div className="author-info">
                  <img src="https://source.unsplash.com/30x30/?portrait" alt="Author" className="author-avatar" />
                  <span className="author-name">Parmar Nirmeet</span>
                </div>
              </div>
              <a href="/blog5" className="read-more">Read More</a>
              <div className="social-share">
                <button className="share-btn" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></button>
                <button className="share-btn" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></button>
                <button className="share-btn" aria-label="Share on LinkedIn"><i className="fab fa-linkedin-in"></i></button>
              </div>
            </div>
          </article>

          {/* Blog 6 */}
          <article className="blog-card">
            <div className="card-image" style={{backgroundImage: "url('/blog4_img2.png')"}}></div>
            <div className="card-content">
              <div className="category-tags">
                <span className="tag">Technology</span>
                <span className="tag">Innovation</span>
              </div>
              <h3>Technology in Forestry: Revolutionizing Forest Management</h3>
              <p>Explore how cutting-edge technologies are transforming forest conservation and management practices...</p>
              <div className="card-meta">
                <div className="author-info">
                  <img src="https://source.unsplash.com/30x30/?portrait" alt="Author" className="author-avatar" />
                  <span className="author-name">Parmar Nirmeet</span>
                </div>
              </div>
              <a href="/blog6" className="read-more">Read More</a>
              <div className="social-share">
                <button className="share-btn" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></button>
                <button className="share-btn" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></button>
                <button className="share-btn" aria-label="Share on LinkedIn"><i className="fab fa-linkedin-in"></i></button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}

export default Mainblog;
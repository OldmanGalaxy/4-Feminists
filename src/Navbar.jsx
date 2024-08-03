import React, {useState, useEffect} from 'react';
import './navbar.css';
import logo from '/logo.png';
import gsap from 'gsap';

 function Navbar(props) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    if (!loaded)
      return;
    gsap.fromTo('.header-container', {
      y: "-15vh",
    }, {
      y: 0,
      duration: 1,
      ease: "power1"
    });
    gsap.set('.header-container', {
      height: "15vh",
      display: "flex"
    });
  }, [loaded]);
  setTimeout(() => setLoaded(true), props.time);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <>
    <nav className='header-container' style={{position: props.sticky === "true" ? "fixed" : "absolute"}}>
      <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <li className="link" onClick={hideSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </a>
        </li>
        <li className="link"><a href="/">Home</a></li>
        <li className="link"><a href="/awareness">Awareness</a></li>
        <li className="link"><a href="/wildlife">Wildlife</a></li>
        <li className="link"><a href="/blog">Blog</a></li>
        <li className="link"><a href="/about">About</a></li>
        <li className="link"><a href="/contact">Contact</a></li>
      </ul>
      
      <ul>
        <li className="link"><a href="/" className="hideOnMobile">Home</a></li>
        <li className="link"><a href="/awareness" className="hideOnMobile">Awareness</a></li>
        <li className="link"><a href="/wildlife" className="hideOnMobile">Wildlife</a></li>
        <li>
          <div className="logo-container">
            <div className="logo-img-container">
              <a href="/" className="logo-link">
                <img src={logo} className="logo" alt="logo" />
              </a>
            </div>
            <div className="title-container">
              <a href="/" className="title-link">
                <div className="title-link-container">
                  <p className="forest">Forest</p> <p className="focus">&nbsp;Focus</p>
                </div>
              </a>
            </div>
          </div> 
        </li>
        <li className="link"><a href="/blog" className="hideOnMobile">Blog</a></li>
        <li className="link"><a href="/about" className="hideOnMobile">About</a></li>
        <li className="link"><a href="/about" className="hideOnMobile">Contact</a></li>
        <li className="menu-button link" onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    {props.gap === 'true' ? (<div className="space" style={{paddingTop: "15vh", backgroundColor: "#254336"}}></div>) : (<p></p>)}
    </>
  );
}

export default Navbar;
import {useState, useEffect} from "react";

export default function Header() {
    return (
        <>
        <div className="header-container">
            <div className="home-link link">
                <a href="">Home</a>
            </div>
            <div className="awareness-link link">
                <a href="">Awareness</a>
            </div>
            <div className="wildlife-link link">
                <a href="">Wildlife</a>
            </div>
            <div className="logo-container">
                <div className="logo-img-container">
                    <a href="" className="logo-link">
                        <img src="assets/logo.png" className="logo" alt="logo"></img>
                    </a>
                </div>
                <div className="title-container">
                    <a href="" className="title-link">
                        <div className="title-link-container">
                            <p className="forest">Forest</p> <p className="focus">&nbsp;Focus</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="blog-link link">
                <a href="">Blog</a>
            </div>
            <div className="about-link link">
                <a href="">About</a>
            </div>
            <div className="contact-link link">
                <a href="">Contact</a>
            </div>
        </div>
        </>
    );
};
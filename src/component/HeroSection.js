import React from 'react';
import Button from './Button';
import '../App.css';
import './HeroSection.css';
import fallingStars from '../assets/videos/video-1.mp4';

export const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src={fallingStars} autoPlay loop muted />
            <h1>ADVENTURES AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
};

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './HeroSec.css'

const HeroSec = () => {
    return (
        <>
            <section className="herosection">
                <div className="hero-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 ">
                                <div className="hero-item">
                                    <h1>adventure awaits</h1>
                                    <p>What are you waiting for?</p>
                                </div>
                                <div className="hero-btn">
                                    <button className='btns'><Link className="it" href="#">get started</Link></button>
                                    <button className='btns'><Link className="it" href="#">watch trailer</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSec;

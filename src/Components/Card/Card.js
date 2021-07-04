import React from 'react';
import { Link } from "react-router-dom";
import image from '../../image/maldives-1993704_1920.jpg';
import './card.css'
const Card = () => {
    return (
        <>
            <section className="card-area">
                <div className="card-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="card-itam">
                                <div class="card">
                                <img class="card-img-top" src = {image} alt=""></img>
                                        <div class="card-body">
                                        <Link href="#" class="btn btn-primary">Go somewhere</Link>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.</p>
                                        </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="card-item-1">
                                <div class="card">
                                <img class="card-img-top" src = {image} alt=""></img>
                                        <div class="card-body">
                                        <Link href="#" class="btn btn-primary">Go somewhere</Link>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.</p>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row card-tt">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                            <div className="card-itam-1">
                                <div class="card">
                                    <img class="card-img-top" src = {image} alt=""></img>
                                        <div class="card-body">
                                        <Link href="#" class="btn btn-primary">Go somewhere</Link>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card-itam-1">
                                <div class="card">
                                <img class="card-img-top" src = {image} alt=""></img>
                                        <div class="card-body">
                                        <Link href="#" class="btn btn-primary">Go somewhere</Link>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.</p>
                                        </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card-itam-1">
                                <div class="card">
                                <img class="card-img-top" src = {image} alt=""></img>
                                        <div class="card-body">
                                        <Link href="#" class="btn btn-primary">Go somewhere</Link>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.</p>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Card;

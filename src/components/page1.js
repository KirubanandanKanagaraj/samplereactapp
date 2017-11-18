import React, { Component } from 'react';
import { Link } from "react-router-dom";

import progressChart1 from '../images/progress1.jpeg';
import progressChart2 from '../images/progress2.jpeg';

export default class Page1App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="screens-holder">
        <div className="container-320">
            <section className="mobile-view screen2">

                <section className="pro-pic">
                    <div className="overlay"></div>
                    <div className="left-sec">
                        <div className="leftsec-overlay"></div>
                        <div className="content-holder">
                            <nav className="nav-icon">
                              <Link to="/"><i className="fa fa-bars"></i></Link>
                            </nav>
                            <span className="pro-name">Jana Navakova</span> 
                        </div>
                    </div>
                    <div className="right-sec">
                        <div className="right-txt">57% of goals</div>
                    </div>
                </section>

                <section className="pro-data">
                    <div className="row">
                        <div className="box box1">
                            <p className="number-nd-unit">
                                22  
                                <span className="stats-label">Age</span>
                            </p>
                        </div>
                        <div className="box box1">
                            <p className="number-nd-unit">
                                A 
                                <span className="stats-label">Blood t.</span>
                            </p>
                        </div>
                        <div className="box ">
                            <p className="number-nd-unit">
                                20.4 
                                <span className="stats-label">BMI</span>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="box box1">
                            <p className="number-nd-unit">
                                87 
                                <span className="unit-bottom"> bpm</span>
                                <span className="stats-label">Heart rate</span>
                            </p>
                        </div>
                        <div className="box box1">
                            <p className="number-nd-unit">
                                87 
                                <span className="unit-bottom"> bpm</span>
                                <span className="stats-label">Heart rate</span>
                            </p>
                        </div>
                        <div className="box ">
                            <p className="number-nd-unit">
                                87 
                                <span className="unit-bottom"> bpm</span>
                                <span className="stats-label">Heart rate</span>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="pro-goals">
                    <div className="content-holder">
                        <p className="sec3-tit">YOUR GOALS</p>
                        <div className="row">
                            <div className="float-l width-50">
                                <span className="main-label">Lose weight</span>
                            </div>
                            <div className="float-r width-50">
                                <span className="sub-label">4.6 kg / 8 kg</span>
                            </div>
                            <div className="progresschart">
                                <img src={progressChart1} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="float-l width-50">
                                <span className="main-label">Running per week</span>
                            </div>
                            <div className="float-r width-50">
                                <span className="sub-label">8.2 km / 10 km</span>
                            </div>
                            <div className="progresschart">
                                <img src={progressChart2} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="float-l width-50">
                                <span className="main-label">Steps per day</span>
                            </div>
                            <div className="float-r width-50">
                                <span className="sub-label">3342 / 10000</span>
                            </div>
                            <div className="progresschart">
                                <img src={progressChart2} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </div>
      </div>
    );
  }
}
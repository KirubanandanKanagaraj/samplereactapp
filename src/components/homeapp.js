import React, { Component } from 'react';
import { Link } from "react-router-dom";

import splineChartOrange from '../images/spline-chart-orange.jpeg';
import splineChartBlue from '../images/spline-chart-blue.jpeg';
import splineProgress from '../images/spline-progress.jpeg';
import splineChartPurple from '../images/spline-chart-purple.jpeg';
import screen1Graph from '../images/screen1-graph.jpeg';

export default class HomeApp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="screens-holder">
        <div className="container-320">
            <section className="mobile-view">
                
                
                <div className="content-holder">
                  <div className="float-l">
                    <nav className="nav-icon">
                      <i className="fa fa-bars"></i>
                    </nav>
                  </div>
                  <div className="float-r">
                      <Link to="/page1"><div className="img-small-cirlce"></div></Link>
                  </div>
                </div>


                <div className="content-holder">
                    <p className="welcome-txt">Welcome back Jana, <br /> Things look <a href="javascript:" className="txt-blue">allright.</a></p>
                </div>

                <div className="disp-stats-table">
                    <div className="row">
                        <div className="box box-left">
                            <p className="number-nd-unit">
                              36.75
                              <span className="unit-top"> o</span>
                              <span className="stats-label">Temperature</span>
                            </p>
                            <div className="stats-spline-chart chart-sec">
                                <img src={splineChartOrange} alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <p className="number-nd-unit">
                                537 
                                <span className="unit-bottom"> cal</span>
                                <span className="stats-label">Calories burned</span>
                            </p>
                            <div className="stats-spline-chart chart-sec">
                                <img src={splineChartBlue} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="box box-left">
                            <p className="number-nd-unit">
                                3342 
                                <span className="stats-label"> Steps</span>
                            </p>
                            <div className="stats-spline-chart chart-sec">
                              <img src={splineProgress} alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <p className="number-nd-unit">
                                87 
                                <span className="unit-bottom"> bpm</span>
                                <span className="stats-label">Heart rate</span>
                            </p>
                            <div className="stats-spline-chart chart-sec">
                                <img src={splineChartPurple} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="moving-activity">
                    <div className="content-holder">
                        <div className="screen1-tit">
                            <p className="tit">Moving Activity
                              <span className="avg"><i className="fa fa-circle"></i> Avg</span>
                              <span className="today"><i className="fa fa-circle"></i> Today</span>
                            </p>
                        </div>
                    </div>
                    <div className="disp-ma-chart">
                        <Link to="/page2"><img src={screen1Graph} alt="" /></Link>
                    </div>
                </section>


            </section>
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import iconright from '../images/screen3-icon-right.jpeg';
import screen3chart from '../images/screen3chart.jpeg';
import backArrow from '../images/backarrow.jpeg';

export default class Page2App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="screens-holder">
        <div className="container-320">
            <section className="mobile-view screen3">
                <div className="content-holder">
                  <div className="float-l">
                      <nav className="nav-icon lefticon-holder">
                          <Link to="/"><img src={backArrow} alt="" /></Link>
                      </nav>
                  </div>
                  <div className="float-r">
                      <span className="righticon-holder">
                          <img src={iconright} alt="" />
                      </span>
                  </div>

                  <div className="screen3-content">
                      <p className="small-txt">June 4 2015</p>
                      <div className="body-weight">
                          <span className="number">54.7</span> 
                          <span className="unit">Kg</span></div>
                      <p classname="medium-txt">Body weight</p>
                  </div>
                </div>

                <div className="screenChart">
                    <img src={screen3chart} alt="" />
                </div>

            </section>
        </div>
      </div>
    );
  }
}
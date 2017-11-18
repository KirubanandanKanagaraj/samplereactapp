import React, { Component } from 'react';

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
                                <i className="fa fa-bars"></i>
                            </nav>
                            <span className="pro-name">Jana Navakova</span> 
                        </div>
                    </div>
                </section>

                <section className="pro-data">

                </section>

                <section className="pro-goals">

                </section>

            </section>
        </div>
      </div>
    );
  }
}
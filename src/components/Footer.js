import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    
    // let resumeData = this.props.resumeData;
    return (
    
      <footer>
      {/* <div className="row"> */}
          <h2>Constant and Never Ending Improvment</h2>
          <h2><small>&copy; Copyright 2019, Hyun Han</small></h2>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      {/* </div> */}
    </footer>
    );
  }
}
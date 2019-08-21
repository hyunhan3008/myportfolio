import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
            <h3>Languages I can utilise:</h3>
            <ul class="a">
              <li className="info" type="circle">Java </li>
              <li className="info" type="circle">Python</li>
              <li className="info" type="circle">Node.JS</li>
              <li className="info" type="circle">Ruby</li>
              <li className="info" type="circle">Haskell</li>
            </ul>

            <h3>Languages I am cracking on with</h3>
            <ul class="a">
              <li className="info" type="circle">React/Redux</li>
              <li className="info" type="circle">AWS</li>
              <li className="info" type="circle">GO</li>
              <li className="info" type="circle">C++</li>
              <li className="info" type="circle">GrapQL</li>
            </ul>
            </div>
         </div>

        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Interest</span></h1>
            </div>

            <div className="nine columns main-col">
            <h3>For my expertise:</h3>

            <ul class="a">
              <li className="info" type="circle">Machine/Deep Learning</li>
              <li className="info" type="circle">Artifical Intelligence / Algorithms</li>
              <li className="info" type="circle">The Internet of Things</li>
            </ul>

            <h3>For my casual life:</h3>
            <ul class="a">
              <li className="info" type="circle">Jujitsu</li>
              <li className="info" type="circle">Gym - Power Lifting</li>
              <li className="info" type="circle">Learning Tennis</li>
              <li className="info" type="circle">Playing Piano</li>
              <li className="info" type="circle">Learning Russian</li>
              <li className="info" type="circle">Reading Books / Giving a speech / Writing book reviewing</li>
            </ul>

            <h3>For Books:</h3>

            <ul class="a">
              <li className="info" type="circle">Influence: The Psychology of Persuasion</li>
              <li className="info" type="circle">Scale: The Universal Laws of Life and Death in Organisms, Cities and Companies</li>
              <li className="info" type="circle">Algorithms to Live By: The Computer Science of Human Decisions</li>
              <li className="info" type="circle">Primed to Perform: How to Build the Highest Performing Cultures Throught the Science of Total Motivation</li>
              <li className="info" type="circle">Misbehaving: The Making of Behavioural Economics</li>
              <li className="info" type="circle">The Better Angels of Our Nature: A History of Violence and Humanity</li>
            </ul>

            </div> 
         </div>
      </section>
    );
  }
}
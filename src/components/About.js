import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>IF ...</h2>
                <ul className="social">
                   {
                      resumeData.socialLinks && resumeData.socialLinks && resumeData.socialLinks.map(item => {
                         return (
                            <li key={item.name}>
                               <a href={item.url} ><i className={item.className}></i>&emsp;{item.tagDescription}</a>
                               <p></p>
                            </li>
                         )
                      }
                      )
                   }
                </ul>
                <p className="social">
               {
                  <a href="mailto:hyunhan9508@gmail.com? subject=subject text"><i class="fa fa-envelope">&emsp;If you want to contat to me!</i></a>
               }
               </p>

            </div>
         </div>
      </section>
    );
  }
}